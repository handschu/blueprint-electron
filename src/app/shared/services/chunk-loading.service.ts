import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ChunkLoadingService {

  chunks: string[] = [];
  chunkSubject: Subject<String[]> = new Subject();
  availableChunks: string[] = [];


  constructor(private electronService: ElectronService) {
    this.electronService.ipcRenderer.send('REST:GetChunks');
    this.electronService.ipcRenderer.on('REST:GetChunks:Response', (event: Event, chunks: string[]) => {
      console.log(chunks);
      for (const chunk of chunks) {
        this.chunks.push(chunk);
      }
      this.chunkSubject.next(this.chunks);
    });

    this.electronService.ipcRenderer.send('REST:GetAvailableChunks');
    this.electronService.ipcRenderer.on('REST:GetAvailableChunks:Response', (event: Event, chunks: string[]) => {
      console.log(chunks);
      for (const chunk of chunks) {
        this.availableChunks.push(chunk.substring(0, chunk.indexOf('.')));
      }
    });


  }

  updateConfig(chunks: string[]) {
    this.electronService.ipcRenderer.send('REST:UpdateChunks', chunks);
    this.chunks = chunks;
    this.chunkSubject.next(this.chunks);
  }

}
