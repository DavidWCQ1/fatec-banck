import { NgModule } from '@angular/core';
import { InvestimentoComponent } from './investimento.component'

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { InvestimentoService }  from './investimento.service'

const routes: Routes = [
  { path: '', component: InvestimentoComponent },
];


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InvestimentoComponent],
  exports: [RouterModule],
  providers: [InvestimentoService]
})
export class InvestimentoModule { }
