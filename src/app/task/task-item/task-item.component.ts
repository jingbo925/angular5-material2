import {Component, OnInit, Input, Output, EventEmitter,HostListener} from '@angular/core';
import {itemAnim } from '../../anims/item.anim'
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  animations: [
    itemAnim
  ]
})
export class TaskItemComponent implements OnInit {

  @Input() item: any;
  @Output() taskClick = new EventEmitter<void>();

  widerPriority = 'in';
  constructor() { }

  ngOnInit() {
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.widerPriority = 'out';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.widerPriority = 'in';
  }


  onItemClick() {
    this.taskClick.emit();
  }

  onCheckBoxClick(ev: Event) {
    ev.stopPropagation();// 阻止时间继续往外传播
  }

}
