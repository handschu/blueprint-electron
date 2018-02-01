import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAComponent } from './product-a.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";

const routes: Routes = [
    { path: '', component: ProductAComponent }
];

@NgModule({
    declarations: [
        ProductAComponent
    ],
  imports: [
      FormsModule,
      CommonModule,
      RouterModule.forChild(routes),
  ],
    exports: [
        ProductAComponent
    ]
})
export class ProductAModule { }
