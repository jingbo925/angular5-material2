/**
 * Created by gy104 on 2017/12/19.
 */
import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {ProjectListComponent} from "./project-list/project-list.component";
/**
 * Created by gy104 on 17/11/28.
 */

const routes: Routes = [
  {path: 'project', component:ProjectListComponent}
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProjectRoutingModule {}
