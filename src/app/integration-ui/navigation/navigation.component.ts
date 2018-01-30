import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../shared/services/sidebar.service';
import { ChunkLoadingService } from '../../shared/services/chunk-loading.service';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
    width: number;
    chunks: String[];
    constructor(private sidebarService: SidebarService, private chunkLoadingService: ChunkLoadingService) {
        this.chunkLoadingService.chunkSubject.subscribe((chunks) => {
            this.chunks =  chunks;
        });    }

    ngOnInit() {
        this.sidebarService.widthSubject.subscribe(data => this.width = data.navigation);

    }

    toggleNavigation() {
        this.sidebarService.toggleNavigation();
    }
}
