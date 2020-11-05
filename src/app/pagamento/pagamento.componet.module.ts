import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagamentoComponent } from './pagamento.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { PagamentoService } from './pagamento.service';

const routes: Routes = [
  { path: '', component: PagamentoComponent },
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),  
    HttpClientModule
  ],
  declarations: [PagamentoComponent],
  exports: [RouterModule,ReactiveFormsModule],
  providers: [PagamentoService]
})
export class PagamentoModule { }