import { Component } from '@angular/core';
import { DateTime } from "luxon";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fackSchedules:Schedule[] = [{id: 1658107621840,
                              date: '2022-08-24',
                              content: '測試用的待辦事項',
                              state: false,
                              edit: false},
                            {id: 1658107621842,
                              date: '2022-08-25',
                              content: '測試用的待辦事項',
                              state: true,
                              edit: false},
                            {id: 1658107621843,
                              date: '2022-08-26',
                              content: '測試用的待辦事項',
                              state: false,
                              edit: false},
                              {id: 1658107621813,
                                date: '2022-08-26',
                                content: '測試用的待辦事項',
                                state: true,
                                edit: false},
                                {id: 1658207621813,
                                  date: '2022-08-26',
                                  content: '測試用的待辦事項',
                                  state: true,
                                  edit: false}];



  title = 'calendar';
  weekNames = ['SUN', 'MON', 'TUES', 'WED', 'THUR', 'FRI', 'SAT'];
  calendarMonth = DateTime.now();
  selectDate = DateTime.now().toFormat('yyyy-MM-dd');
  allSchedule:Schedule[] = this.fackSchedules;

  preMonth(): void {
    this.calendarMonth = this.calendarMonth.plus({month: -1});
  };
  nextMonth(): void {
    this.calendarMonth = this.calendarMonth.plus({month: 1});
  };
  isWeekNormalDay(weekName:String): Boolean {
    return weekName !== 'SAT' && weekName !== 'SUN';
  }

  getCalendar(): CalendarDay[] {
    let nowCanlenderContent = [],
    today = DateTime.now(),
    startDate = this.calendarMonth.startOf('month');
    startDate = startDate.plus({ day: -startDate.weekday });

    for (let i = 0; i < 42; i++) {
      let dateInFor = startDate.toFormat('yyyy-MM-dd');
      let isToday = today.year == startDate.year && today.month == startDate.month && today.day == startDate.day;
      nowCanlenderContent.push({
        date: dateInFor,
        isNowMonth: this.calendarMonth.month == startDate.month,
        isToday: isToday,
        isSelectDay: (dateInFor == this.selectDate) && !isToday,
        isHoliday: i % 7 == 0 || i % 7 == 6,
        schedules: this.allSchedule.filter((schedule)=>{
          return schedule.date === dateInFor; 
        })
      });

      startDate = startDate.plus({ day: 1 });
    }
    return nowCanlenderContent;
  }

  changeSelectDate(date:string): void {
    this.selectDate = date;
  }

  getSelectDaySchedule(): Schedule[] {
    return this.allSchedule.filter((schedule)=>{return schedule.date===this.selectDate});
  }

  deleteSchedule(id:number): void {
    this.allSchedule = this.allSchedule.filter((schedule)=>{return schedule.id != id});
  }

  addSchedule(date:string): void {
    this.allSchedule.push({
      id: new Date().getTime(),
      date: date,
      content: '',
      state: false,
      edit: true
    });
  }
}
