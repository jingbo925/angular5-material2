import { NgModule } from '@angular/core';;
import { LoginComponent } from './login/login.component';
import {ShareModule} from "../share/share.module";
import {LoginRoutingModule} from "./login-routing.model";

@NgModule({
  imports: [
    ShareModule,
    LoginRoutingModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
