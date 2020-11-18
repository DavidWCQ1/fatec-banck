import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExtratoComponent } from './extrato.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { ExtratoService } from './extrato.service';

const routes: Routes = [
  { path: '', component: ExtratoComponent },
];

@NgModule({
  
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),  
    HttpClientModule
  ],
  declarations: [],
  exports: [RouterModule,ReactiveFormsModule],
  providers: [ExtratoService]
})
export class ExtratoModule { }
