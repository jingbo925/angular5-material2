/**
 * Created by gy104 on 17/11/28.
 */
import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
/**
 * Created by gy104 on 17/11/28.
 */

const routes: Routes = [
  {path: '', redirectTo:'/login', pathMatch:'full'},
  {path: 'project', redirectTo:'/project', pathMatch:'full'},
  {path: 'task', redirectTo:'/tasklists', pathMatch:'full'},
  // {path: 'project', component:AppComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
