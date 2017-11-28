import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {NgModule} from "@angular/core";
/**
 * Created by gy104 on 17/11/28.
 */

const routes: Routes = [
  {path: 'login', component:LoginComponent}
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LoginRoutingModule {}
