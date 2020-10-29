import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BoletoComponent} from './boleto/boleto.component'

const routes: Routes = [
  { path: 'boletos', loadChildren: () => import('./boleto/boleto.component.module').then(m => m.BoletoModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
