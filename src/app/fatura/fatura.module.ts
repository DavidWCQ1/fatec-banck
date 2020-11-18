import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { FaturaService } from './fatura.service';
import { FaturaComponent } from './fatura.component';

const routes: Routes = [
  { path: '', component: FaturaComponent },
];

@NgModule({
 
  imports: [
    CommonModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),  
    HttpClientModule
  ],
  declarations: [FaturaComponent],
  exports: [RouterModule,ReactiveFormsModule],
  providers: [FaturaService]
})
export class FaturaModule { }
