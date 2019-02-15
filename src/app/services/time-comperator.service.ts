import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeComperatorService {

  constructor() { }

  isStartBeforeCurrentDate(currentDate: Date, startDate: Date) {
    return startDate.getTime() < currentDate.getTime(); 
  }

  isStopBeforeCurrentDate(currentDate: Date, stopDate: Date) {
    stopDate.getTime() < currentDate.getTime(); 
  }

  isStartAfterCurrentDate(currentDate: Date, startDate: Date) {
    return currentDate.getTime() > startDate.getTime()
  } 
  isStopAfterCurrentDate(currentDate: Date, stopDate: Date) {
    return currentDate.getTime() > stopDate.getTime()
  }


}
