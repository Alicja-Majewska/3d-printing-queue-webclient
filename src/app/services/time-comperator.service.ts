import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeComperatorService {

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


}
