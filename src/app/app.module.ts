import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AppService } from './app.service';
// import {LoginComponent} from './login/login.component'


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    // LoginComponent
  ],  
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
