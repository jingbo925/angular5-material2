import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { MatSidenavModule} from '@angular/material'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CoreModule } from './core/core.module'
import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {LoginModule} from "./login/login.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    FormsModule,
    HttpModule,
    CoreModule,
    AppRoutingModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
