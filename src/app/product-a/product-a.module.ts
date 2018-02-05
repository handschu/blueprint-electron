import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAComponent } from './product-a.component';
import {FormsModule} from "@angular/forms";
import {ProductARoutingModule} from "./product-a-routing.module";

@NgModule({
    declarations: [
        ProductAComponent
    ],
  imports: [
      FormsModule,
      CommonModule,
      ProductARoutingModule,
  ],
    exports: [
        ProductAComponent
    ],
    entryComponents: [ProductAComponent]
})
export class ProductAModule { }
