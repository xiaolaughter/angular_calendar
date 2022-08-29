import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-side-bar',
  templateUrl: './todo-side-bar.component.html',
  styleUrls: ['./todo-side-bar.component.css']
})
export class TodoSideBarComponent implements OnInit {
  @Input() selectDate!: string;
  @Input() schedule!: Schedule[];
  @Output() deletScheduleItemOutput = new EventEmitter<number>(); 
  @Output() addScheduleItemOutput = new EventEmitter<string>(); 
  
  
  constructor() { }

  ngOnInit(): void {
  }

  dblclickEvent(): void {
    console.log('dbclick');
  }
  verifyToDoListContent(listItem:Schedule): void {
    if(listItem.content.trim() == ''){
      this.deletScheduleItemOutput.emit(listItem.id);
    }else{
      this.changeEdit(listItem, false);
    }
  }

  keyupVerifyToDoListContent(listItem:Schedule, event:KeyboardEvent): void {
    if(event.key == 'Enter'){
      this.verifyToDoListContent(listItem);
    }
  }

  changeEdit(listItem:Schedule, isEdit:boolean): void {
    listItem.edit = isEdit;
  }

  deleteScheduleItem(item:Schedule): void {
    this.deletScheduleItemOutput.emit(item.id);
  }

  addScheduleItem(): void {
    this.addScheduleItemOutput.emit(this.selectDate);
  }

}
