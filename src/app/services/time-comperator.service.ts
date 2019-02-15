import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeComperatorService {

 static readonly START_HOUR = 7;
  static readonly INTERVAL_IN_MINUTES = 15;
  static readonly END_HOUR = 19;
  
   constructor() { }

  isStartBeforeCurrentDate(currentDate: Date, startDate: Date): boolean{
    return startDate.getTime() < currentDate.getTime(); 
  }

  isStopBeforeCurrentDate(currentDate: Date, stopDate: Date): boolean {
    return stopDate.getTime() < currentDate.getTime(); 
  }

  isStartAfterCurrentDate(currentDate: Date, startDate: Date): boolean {
    return currentDate.getTime() < startDate.getTime()
  } 
  isStopAfterCurrentDate(currentDate: Date, stopDate: Date): boolean {
    return currentDate.getTime() < stopDate.getTime()
  }
  
  haveDatesTheSameDay(date1: Date, date2: Date): boolean {
    return date1.getFullYear() === date2.getFullYear()
      && date1.getMonth() === date2.getMonth()
      && date1.getDate() === date2.getDate();
  }


}
