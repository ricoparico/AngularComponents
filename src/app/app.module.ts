import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayhelloworldComponent } from './components/displayhelloworld/displayhelloworld.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowhellobuttonComponent } from './components/showhellobutton/showhellobutton.component';
import { DisplaynameComponent } from './components/displayname/displayname.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayhelloworldComponent,
    LandingpageComponent,
    ShowhellobuttonComponent,
    DisplaynameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
