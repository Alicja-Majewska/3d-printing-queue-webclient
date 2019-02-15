import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeComperatorService {

  static readonly START_HOUR = 7;
  static readonly INTERVAL_IN_MINUTES = 15;
  static readonly END_HOUR = 19;

  constructor() {
  }

  haveDatesTheSameDay(date1: Date, date2: Date): boolean {
    return date1.getFullYear() === date2.getFullYear()
      && date1.getMonth() === date2.getMonth()
      && date1.getDate() === date2.getDate();
  }

}
