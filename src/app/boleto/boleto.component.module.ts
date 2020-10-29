import { NgModule } from '@angular/core';
import { BoletoComponent } from './boleto.component';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { BoletoService } from './boleto.service';

const routes: Routes = [
  { path: '', component: BoletoComponent },
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),  
    HttpClientModule
  ],
  declarations: [BoletoComponent],

  exports: [RouterModule,ReactiveFormsModule],
  providers: [BoletoService],
  
})
export class BoletoModule { }
