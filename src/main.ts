import { ipcMain } from 'electron';
import * as Rx from 'rxjs/Rx';
import * as http from 'http';
import {Menu} from 'electron';

const {app, BrowserWindow} = require('electron');
const ngServer = 'http://localhost:4200';

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win: Electron.BrowserWindow;

async function createWindow() {

    // Create the browser window.
    win = new BrowserWindow({width: 800, height: 600, show: false, minWidth: 800, minHeight: 600});
    win.once('ready-to-show', () => {
        win.show();
    });

    // and load the index.html of the app.
    win.loadURL(`file://${__dirname}/../dist/index.html`);

    const menu = Menu.buildFromTemplate([{
            label: 'Datei',
            submenu: [
                {role: 'quit'}
            ]
        }]
    );

    win.setMenu(menu)
    //win.loadURL(ngServer);

    // Open the DevTools.
    //win.webContents.openDevTools();

    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    Rx.Observable.fromEvent(win, 'closed')
        .first()
        .subscribe(() => win = undefined);


}



Rx.Observable.fromEvent(app, 'ready')
    .first()
    .subscribe(createWindow);

Rx.Observable.fromEvent(app, 'activate')
    .filter(() => win === undefined)
    .subscribe(createWindow);

Rx.Observable.fromEvent(app, 'web-contents-created',
    (event: Event, contents: Electron.WebContents) => contents)
    .subscribe(contents => {

        Rx.Observable.fromEvent(contents, 'will-attach-webview',
            (event: Event, webPreferences: Electron.WebPreferences) => ({ event: event, webPreferences: webPreferences }))
            .subscribe(val => {
                delete val.webPreferences.preload;
                delete (<any>val.webPreferences).preloadURL;

                val.webPreferences.nodeIntegration = false;
                val.webPreferences.nodeIntegrationInWorker = false;

                val.webPreferences.contextIsolation = true;
            });
    });

ipcMain.on('REST:GetChunks', (event: Electron.Event) => {
    let chunks = getLoadedChunks('dist');
    event.sender.send('REST:GetChunks:Response', chunks);
});

ipcMain.on('REST:GetAvailableChunks', (event: Electron.Event) => {
    getAvailableChunks(event);
});


function getAvailableChunks(event: Electron.Event) {
    const options = {
        hostname: 'localhost',
        port: 8080,
        path: '/chunk/',
        method: 'get',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    const req = http.request(options, (res) => {
        res.setEncoding('utf8');
        let data = '';
        res.on('data', (chunk) => {
            if (chunk !== 'undefined'){
                data += chunk;
            }
        });
        res.on('end', () => {

            const chunks: String[] = JSON.parse(data);
            console.log(chunks);
            event.sender.send('REST:GetAvailableChunks:Response', chunks);
        });
    });

    req.on('error', (e) => {
        console.error(`problem with request: ${e.message}`);
    });

    // write data to request body
    req.end();
}


function getLoadedChunks(folder: string){
    const fs = require('fs');
    let chunks: string[] = [];
    if (!fs.existsSync('./' + folder)) {
        folder = './resources/app/dist';
    }

    let files: string[] = fs.readdirSync('./' + folder);

    files.forEach(file => {
        if(file.includes('chunk') && !file.includes('common') && !file.includes('shared')) {
            // TODO SvHa: fachlichen Namen aus dem Chunk lesen (properties?)
            chunks.push(file.substring(0, file.indexOf('.')));
        }
    });
    console.log(chunks);
    return chunks;
}

ipcMain.on('REST:UpdateChunks', (event: Electron.Event, chunks: string[]) => {
    for (const chunk of getLoadedChunks('/dist')){
        if (!chunks.includes(chunk)) {
            deleteChunk(chunk);
        }
    }

    for (const chunk of chunks){
        if (!getLoadedChunks('dist').includes(chunk)) {
            downloadChunk(chunk);
        }
    }

    event.sender.send('REST:UpdateChunks:Response', true);

});


function deleteChunk(chunkname: string) {
    const fs = require('fs');
    fs.unlink('./dist/' + chunkname + '.module.chunk.js', (err: string) => {
        if (err) {
            console.log('failed to delete local image:' + err);
        } else {
            console.log('successfully deleted local chunk');
        }
    });
}



ipcMain.on('REST:DownloadChunk', (event: Electron.Event, chunkname: string) => {
    downloadChunk(chunkname);
});

function downloadChunk(chunkname: string) {
    const options = {
        hostname: 'localhost',
        port: 8080,
        path: '/chunk/' + chunkname,
        method: 'get',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    const req = http.request(options, (res) => {
        res.setEncoding('utf8');
        let data = '';
        res.on('data', (chunk) => {
            if (chunk !== 'undefined'){
                data += chunk;
            }
        });
        res.on('end', () => {
            writeChunk(chunkname, data);
            console.log(data);
        });
    });

    req.on('error', (e) => {
        console.error(`problem with request: ${e.message}`);
    });

    // write data to request body
    req.end();
}


function writeChunk(chunkName: string, data: string) {
    const fs = require('fs');
    fs.writeFileSync('./dist/' + chunkName + '.module.chunk.js', data);
}



// On macOS it is common for applications and their menu bar
// to stay active until the user quits explicitly with Cmd + Q
// On all other platforms we quit when all windows are closed
if (process.platform !== 'darwin') {
    Rx.Observable.fromEvent(app, 'window-all-closed')
        .first()
        .subscribe(() => {
            app.quit();
        });
}
