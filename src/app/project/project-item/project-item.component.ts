import {Component, OnInit, Input, EventEmitter, Output, HostBinding,HostListener} from '@angular/core';
import { cardAnim} from '../../anims/card.anim'
@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  animations: [
    cardAnim
  ]
})
export class ProjectItemComponent implements OnInit {

  @Input() item: any;
  @Output() onInvite = new EventEmitter<void>();
  @Output() onEdit = new EventEmitter<void>();
  @Output() onDel = new EventEmitter<void>();
  @HostBinding('@card') cardState = 'out';


  constructor() { }

  ngOnInit() {
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.cardState = 'hover';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.cardState = 'out';
  }

  onInviteClick() {
    this.onInvite.emit();
  }
  onEditClick() {
    this.onEdit.emit()
  }

  onDeleteClick() {
    this.onDel.emit()
  }
}
