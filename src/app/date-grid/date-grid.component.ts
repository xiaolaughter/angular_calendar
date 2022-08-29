import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-date-grid',
  templateUrl: './date-grid.component.html',
  styleUrls: ['./date-grid.component.css'],
  inputs: ['schedule']
})
export class DateGridComponent implements OnInit {
  @Input() schedule: object = [];
  @Input() day!: CalendarDay;
  @Output() changeSelectDateOutPut = new EventEmitter<string>(); 


  constructor() { }

  ngOnInit(): void {
    
  }

  changeSelectDate(): void {
    this.changeSelectDateOutPut.emit(this.day.date);
  }
}
