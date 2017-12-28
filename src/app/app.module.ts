import { BrowserModule } from '@angular/platform-browser';


import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module'
import { AppComponent } from './app.component';

import {LoginModule} from "./login/login.module";
import {ProjectModule} from "./project/project.module";
import {TaskModule} from "./task/task.module";
import {ShareModule} from "./share/share.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ShareModule,
    BrowserModule,
    FormsModule,
    CoreModule,
    LoginModule,
    ProjectModule,
    TaskModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
