import {Injectable, NgModule} from '@angular/core';

import { ElectronService } from 'ngx-electron';
import { Subject } from 'rxjs/Subject';
import {Router, Routes, RouterModule, PreloadAllModules} from "@angular/router";
import { ipcMain } from 'electron';
import {routes} from "../../app-routing.module";
import {IntegrationUiModule} from "../../integration-ui/integration-ui.module";
import {addPathToRoutes} from "@angular/cli/lib/ast-tools";


@Injectable()
export class ChunkLoadingService {

    chunks: string[] = [];
    chunkSubject: Subject<String[]> = new Subject();
    availableChunks: string[] = [];


    constructor(private electronService: ElectronService, private router : Router) {
        this.electronService.ipcRenderer.send('REST:GetChunks');
        this.electronService.ipcRenderer.on('REST:GetChunks:Response', (event: Event, chunks: string[]) => {
            console.log('get chunks: ' + chunks);
            for (const chunk of chunks) {
                this.chunks.push(chunk);
            }
            this.chunkSubject.next(this.chunks);
        });

        this.electronService.ipcRenderer.send('REST:GetAvailableChunks');
        this.electronService.ipcRenderer.on('REST:GetAvailableChunks:Response', (event: Event, chunks: string[]) => {
            console.log('get available chunks: ' + chunks);
            for (const chunk of chunks) {
                this.availableChunks.push(chunk.substring(0, chunk.indexOf('.')));
            }
        });


    }

    updateConfig(chunks: string[]) {
        console.log('alte Routen - BEGINN');

        for (const r of this.router.config) {
            console.log(r);
        }
        console.log('alte Routen - ENDE');

        const routes: Routes = [
            {path: '', redirectTo: '/integration-ui', pathMatch: 'full'},
            {path: 'integration-ui', loadChildren: 'app/integration-ui/integration-ui.module#IntegrationUiModule'},
            // {path: 'product-a', loadChildren: 'app/product-a/product-a.module#ProductAModule'}
        ];
        this.router.resetConfig(routes);
        RouterModule.forRoot(routes, {useHash: true, preloadingStrategy: PreloadAllModules});

        // addPathToRoutes('app/app-routing.module.ts', {path: 'product-a', loadChildren: 'app/product-a/product-a.module#ProductAModule'});

        console.log('neue Routen - BEGINN');
        for (const r of this.router.config) {
            console.log(r);
        }
        console.log('neue Routen - ENDE');

        // this.router.navigate(['./product-a']);

        // this.electronService.ipcRenderer.send('REST:UpdateChunks', chunks);
        // this.electronService.ipcRenderer.on('REST:UpdateChunks:Response', (event: Event, chunks: string[]) => {
        //     console.log(chunks);
        //     this.chunks = chunks;
        //     this.chunkSubject.next(this.chunks);
        // });

    }

}
