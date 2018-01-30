import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ChunkLoadingService } from '../../shared/services/chunk-loading.service';

@Component({
  selector: 'app-chunk-config',
  templateUrl: './chunk-config.component.html',
  styleUrls: ['./chunk-config.component.scss']
})
export class ChunkConfigComponent implements OnInit {

  components: string[];
  checkedComponents: string[];
  activeModal: NgbActiveModal;
  constructor(activeModal: NgbActiveModal, private chunkService: ChunkLoadingService) {
    this.activeModal = activeModal;

  }

  ngOnInit() {
    this.components = this.chunkService.availableChunks;
    this.checkedComponents = JSON.parse(JSON.stringify(this.chunkService.chunks));
  }

  onFilterChange(event: any){
    const checkedElement =  event.srcElement.value;
    const component = this.components.filter(comp => comp === checkedElement)[0];
    if (this.checkedComponents.filter(comp => comp === checkedElement).length > 0){
      const elementToDelete = this.checkedComponents.filter(comp => comp === checkedElement);
      this.checkedComponents.splice(this.checkedComponents.indexOf(elementToDelete[0]), 1);
     // this.chunkConfigService.removeChunk(checkedElement);
    } else {
      this.checkedComponents.push(this.components.filter(comp => comp === checkedElement)[0]);
    //  this.chunkConfigService.addChunk(checkedElement);
    }

  }

  close() {
    this.activeModal.close('Close click');
  }
  changeConfig() {
      this.chunkService.updateConfig(JSON.parse(JSON.stringify(this.checkedComponents)));
   }
  checked(comp: string) {
    return this.checkedComponents.filter(component => component === comp).length > 0;
  }
}
