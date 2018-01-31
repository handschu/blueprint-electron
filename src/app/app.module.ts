
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxElectronModule} from 'ngx-electron';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ChunkConfigComponent } from './integration-ui/chunk-config/chunk-config.component';
import {IntegrationUiModule} from "./integration-ui/integration-ui.module";
import { FormsModule } from '@angular/forms';
import { SidebarService } from './shared/services/sidebar.service';
import { ChunkLoadingService } from './shared/services/chunk-loading.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        IntegrationUiModule,
        NgxElectronModule
    ],
    bootstrap: [AppComponent],
    providers: [SidebarService, ChunkLoadingService],
    entryComponents: [ChunkConfigComponent]
})
export class AppModule {
}
