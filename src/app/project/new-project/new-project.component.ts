import {Component, OnInit, Inject} from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from  "@angular/material"
@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {

  title: string = '';
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<NewProjectComponent>,
  ) { }

  onClick() {

  }

  ngOnInit() {
    this.title = this.data.title;
  }

}
