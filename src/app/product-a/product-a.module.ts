import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAComponent } from './product-a.component';
import {Routes} from "@angular/router";

const routes: Routes = [
    { path: '', component: ProductAComponent }
];

@NgModule({
    declarations: [
        ProductAComponent
    ],
  imports: [
    CommonModule
  ],
    exports: [
        ProductAComponent
    ],
    bootstrap: [ProductAComponent]
})
export class ProductAModule { }
