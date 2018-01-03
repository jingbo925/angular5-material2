import { Component, OnInit,HostBinding } from '@angular/core';
import {MatDialog} from "@angular/material";
import {NewProjectComponent} from "../new-project/new-project.component";
import {InviteComponent} from "../invite/invite.component";
import {ConfirmDialogComponent} from "../../share/confirm-dialog/confirm-dialog.component";
import { sildeToRight} from '../../anims/router.anim'
import {listAnimation} from "../../anims/list.anim";
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  animations: [
    sildeToRight,
    listAnimation
  ]
})
export class ProjectListComponent implements OnInit {

  @HostBinding('@routerAnim') state;
  projects = [
    {
      "id":1,
      "name":"企业协作平台",
      "desc": "这是一个企业内部项目",
      "coverImg":"assets/img/covers/0.jpg"
    },
    {
      "id":2,
      "name":"企业协作平台",
      "desc": "这是一个企业内部项目",
      "coverImg":"assets/img/covers/1.jpg"
    }
  ]
  constructor(private dialog: MatDialog) { }

  openNewProjectDialog() {
    let dialogRef = this.dialog.open(NewProjectComponent,{data: {title: '新增项目'}});

    dialogRef.afterClosed()
      .subscribe(
        (result) => {
          this.projects = [ ... this.projects,{
            "id":3,
            "name":"企业协作平台",
            "desc": "这是一个新项目",
            "coverImg":"assets/img/covers/8.jpg"
          } ]
        }
      )

  }

  launchInviteDialog(){
    this.dialog.open(InviteComponent);
  }

  launchUpdateDialog() {
    this.dialog.open(NewProjectComponent, {data: {title: "编辑项目"}})
  }

  launchDelDialog(project) {
    let dialogRef = this.dialog.open(ConfirmDialogComponent,{data: {title: "删除项目", content: "您确定删除该项目吗？"}})
    dialogRef.afterClosed()
      .subscribe(
        (result) => {
          console.log(result);
          this.projects = this.projects.filter( p => p.id != project.id)
        }
      )
  }

  ngOnInit() {
  }

}
