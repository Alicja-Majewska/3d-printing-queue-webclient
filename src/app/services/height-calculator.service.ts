import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeightCalculatorService {

  static readonly PIXEL_TO_MINUTE_RATIO = 2;
  static readonly MINUTES_IN_HOUR = 60;

  constructor() {
  }

  calculateHeightFromMinutes(minutes: number): number {
    return minutes * HeightCalculatorService.PIXEL_TO_MINUTE_RATIO;
  }

  calculateHeightFromHours(hours: number): number {
    return hours * HeightCalculatorService.PIXEL_TO_MINUTE_RATIO * HeightCalculatorService.MINUTES_IN_HOUR;
  }

  calculateHeightFromHoursAndMinutes(hours: number, minutes: number): number {
    return this.calculateHeightFromHours(hours) + this.calculateHeightFromMinutes(minutes);
  }

}
