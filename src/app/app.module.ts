
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxElectronModule} from 'ngx-electron';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ChunkConfigComponent } from './integration-ui/chunk-config/chunk-config.component';
import {IntegrationUiModule} from "./integration-ui/integration-ui.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        IntegrationUiModule,
        NgxElectronModule
    ],
    bootstrap: [AppComponent],
    entryComponents: [ChunkConfigComponent]
})
export class AppModule {
}
