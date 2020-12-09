import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent } from "./login.component"

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { LoginService } from './login.service';


const routes: Routes = [
  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),  
    HttpClientModule
  ],
  declarations: [LoginComponent],
  exports: [RouterModule,ReactiveFormsModule],
  providers: [LoginService],

})
export class LoginModule { }
