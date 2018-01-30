import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/homepage', pathMatch: 'full'},
  {path: 'homepage', loadChildren: './integration-ui/integration-ui.module.ts#IntegrationUiModule'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true}),
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
