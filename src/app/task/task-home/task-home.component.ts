 import { Component, OnInit,HostBinding } from '@angular/core';
 import {MatDialog} from "@angular/material";
 import {NewTaskComponent} from "../new-task/new-task.component";
 import {CopyTaskComponent} from "../copy-task/copy-task.component";
 import {ConfirmDialogComponent} from "../../share/confirm-dialog/confirm-dialog.component";
 import {NewTaskListComponent} from "../new-task-list/new-task-list.component";
 import { sildeToRight} from '../../anims/router.anim'
@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss'],
  animations: [
    sildeToRight
  ]
})
export class TaskHomeComponent implements OnInit {

  @HostBinding('@routerAnim') state;
  lists = [
    {
      id:1,
      name: '代办',
      tasks: [
        {
          id: 1,
          desc: '任务一：吃饭',
          completed: false,
          priority: 1,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars；svg-11'
          },
          dueDate: new Date(),
          reminder: new Date()
        },
        {
          id: 2,
          desc: '任务二：睡觉',
          completed: true,
          priority: 2,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars；svg-12'
          },
          dueDate: new Date(),
        },
        {
          id: 3,
          desc: '任务二：写代码',
          priority: 3,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars；svg-12'
          },
          dueDate: new Date(),
        }
      ]
    },
    {
      id:2,
      name: '进行中',
      tasks: [
        {
          id: 1,
          desc: '任务一：吃饭',
          completed: true,
          priority: 3,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars；svg-11'
          },
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: '任务二：睡觉',
          completed: false,
          priority: 2,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars；svg-12'
          },
          dueDate: new Date(),
        },
        {
          id: 3,
          desc: '任务二：写代码',
          completed: true,
          priority: 1,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars；svg-12'
          },
          dueDate: new Date(),
        }
      ]
    }
  ]
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  launchNewTaskDialog() {
    this.dialog.open(NewTaskComponent,{data: {title: '新建任务'}})
  }
  launchCopyTaskDialog() {
    const dialogRef = this.dialog.open(CopyTaskComponent,{data:{lists: this.lists}});
  }

  launchUpdateTaskDialog(task: any) {
    this.dialog.open(NewTaskComponent, {data: {title: '修改任务',task: task}})
  }

  launchConfirmDialog(){
    let dialogRef = this.dialog.open(ConfirmDialogComponent,{data: {title: '删除任务', content: "您确定删除项目吗？"}});
    dialogRef.afterClosed()
      .subscribe(
        (result) => {
          console.log(result);
        }
      )
  }

  launchEditListDialog() {
    let dialogRef = this.dialog.open(NewTaskListComponent,{data: {title: '更改列表名称'}});
    dialogRef.afterClosed()
      .subscribe(
        (result) => {
          console.log(result);
        }
      )
  }
  openNewListDialog() {
    let dialogRef = this.dialog.open(NewTaskListComponent,{data: {title: '新建列表'}});
    dialogRef.afterClosed()
      .subscribe(
        (result) => {
          console.log(result);
        }
      )
  }

}
