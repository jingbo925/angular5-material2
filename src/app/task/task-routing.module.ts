/**
 * Created by gy104 on 2017/12/19.
 */
import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {TaskHomeComponent} from "./task-home/task-home.component";
/**
 * Created by gy104 on 17/11/28.
 */

const routes: Routes = [
  {path: 'tasklists', component:TaskHomeComponent}
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TaskRoutingModule {}
