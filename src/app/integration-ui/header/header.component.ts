import { Component, OnInit } from '@angular/core';
import { NgbDropdownConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChunkConfigComponent } from '../chunk-config/chunk-config.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    providers: [NgbDropdownConfig]
})
export class HeaderComponent implements OnInit {
    navIsCollapsed = true;
    searchHistory = [
        {
            numOfResults: '01',
            searchTerm: 'AuftragID 123'
        },
        {
            numOfResults: '01',
            searchTerm: 'AuftragID 456'
        },
        {
            numOfResults: '01',
            searchTerm: 'AuftragID 789'
        },
        {
            numOfResults: '01',
            searchTerm: 'Gutachter: Hans Müller'
        }
    ];

    savedSearchRequests = [
        {
            numOfResults: '01',
            searchTerm: 'AuftragID: 123'
        },
        {
            numOfResults: '01',
            searchTerm: 'AuftragID: 456'
        },
        {
            numOfResults: '01',
            searchTerm: 'AuftragID: 789'
        }
    ];

    constructor(config: NgbDropdownConfig, private modalService: NgbModal) {
        config.placement = 'bottom-right';
        config.autoClose = false;
    }

    ngOnInit() {

    }

    open() {
        const modalRef = this.modalService.open(ChunkConfigComponent);
        modalRef.componentInstance.name = 'World';
      }


}
