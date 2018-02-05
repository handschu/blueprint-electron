import { ChunkLoadingService } from '../shared/services/chunk-loading.service';
import { HomepageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';

import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ChunkConfigComponent } from './chunk-config/chunk-config.component';

const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'homepage', component: HomepageComponent }
];

@NgModule({
    declarations: [
        HeaderComponent,
        NavigationComponent,
        FooterComponent,
        HomepageComponent,
        ChunkConfigComponent,
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild(routes),
        NgbModule.forRoot()
    ],
    exports: [
        HeaderComponent,
        NavigationComponent,
        FooterComponent,
        HomepageComponent,
        ChunkConfigComponent
    ],
    providers: [ChunkLoadingService],
    entryComponents: [HomepageComponent]
})
export class IntegrationUiModule { }
