import { Component } from '@angular/core';
import { SidebarService } from './shared/services/sidebar.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    navigationWidth: number;
    contextWidth: number;
    sidebarSumWidth: number;

    constructor(private sidebarService: SidebarService) {
        this.sidebarService.widthSubject.subscribe(
            data => {
                this.navigationWidth = data.navigation;
                this.contextWidth = data.context;
                this.sidebarSumWidth = data.sidebarSum;
            });
    }
}




