import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { TransferenciaService } from './transferencia.service';
import { TransferenciaComponent } from './transferencia.component';

const routes: Routes = [
  { path: '', component: TransferenciaComponent },
];



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),  
    HttpClientModule
  ],
  declarations: [TransferenciaComponent],
  exports: [RouterModule,ReactiveFormsModule],
  providers: [TransferenciaService]
})
export class TransferenciaModule { }
