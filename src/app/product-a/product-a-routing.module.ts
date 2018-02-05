import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductAComponent} from "./product-a.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

const routes: Routes = [
  { path: '', component: ProductAComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    NgbModule.forRoot()
],
  exports: [RouterModule]
})
export class ProductARoutingModule { }
