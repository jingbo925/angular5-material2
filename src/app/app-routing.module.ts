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
  // {path: 'path', component:AppComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
