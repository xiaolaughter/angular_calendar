import { Pipe, PipeTransform } from '@angular/core';
import { DateTime } from "luxon";

@Pipe({
  name: 'dateMonthName'
})
export class DateMonthNamePipe implements PipeTransform {

  transform(value: string): string {
    const monthNameArr = ['January', 'February', 'March', 'April', 'May', 'June',
                          'July', 'August', 'September', 'October', 'November', 'December'];
    let dateArr = value.split('-');
    return `${monthNameArr[+dateArr[1]-1]} ${dateArr[0]}`;
  }

}
