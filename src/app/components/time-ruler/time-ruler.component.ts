import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-time-ruler',
  templateUrl: './time-ruler.component.html',
  styleUrls: ['./time-ruler.component.scss']
})
export class TimeRulerComponent implements OnInit {

  static readonly START_HOUR = 7;
  static readonly INTERVAL = 15;
  static readonly END_HOUR = 19;
  static readonly MINUTES_IN_HOUR = 60;
  static readonly PIXEL_TO_MINUTE_RATIO = 2;

  timeSlices: string[];

  constructor() {
  }

  ngOnInit() {
    this.timeSlices = this.generateTimeSlices();
  }

  generateTimeSlices(): string[] {

    const timeSlices: string[] = [];

    for (let hour = TimeRulerComponent.START_HOUR; hour < TimeRulerComponent.END_HOUR; ++hour) {
      for (let minutes = 0; minutes < TimeRulerComponent.MINUTES_IN_HOUR; minutes += TimeRulerComponent.INTERVAL) {
        timeSlices.push(this.buildTimeSlice(hour, minutes));
      }
    }
    return timeSlices;
  }

  private buildTimeSlice(hour: number, minutes: number): string {
    return this.numberToStringLeadingZero(hour) + ':' + this.numberToStringLeadingZero(minutes);
  }

  private numberToStringLeadingZero(toFormat: number): string {
    var str = '' + toFormat;
    if (str.length < 2) {
      str = '0' + str;
    }
    return str;
  }

  getFontWeight(timeSlice: string): string {
    return timeSlice.endsWith('00') ? 'bold' : 'normal';
  }

  calculateHeight():number {
    return TimeRulerComponent.INTERVAL * TimeRulerComponent.PIXEL_TO_MINUTE_RATIO;
  }
}
