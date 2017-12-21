 import { Component, OnInit } from '@angular/core';
 import {MatDialog} from "@angular/material";
 import {NewTaskComponent} from "../new-task/new-task.component";
 import {CopyTaskComponent} from "../copy-task/copy-task.component";

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {


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

}
