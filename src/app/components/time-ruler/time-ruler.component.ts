import {Component, OnInit} from '@angular/core';
import {HeightCalculatorService} from '../../services/height-calculator.service';

@Component({
  selector: 'app-time-ruler',
  templateUrl: './time-ruler.component.html',
  styleUrls: ['./time-ruler.component.scss']
})
export class TimeRulerComponent implements OnInit {

  static readonly START_HOUR = 7;
  static readonly INTERVAL_IN_MINUTES = 15;
  static readonly END_HOUR = 19;
  static readonly MINUTES_IN_HOUR = 60;


  timeSlices: string[];

  constructor(private heightCalculatorService: HeightCalculatorService) {
  }

  ngOnInit() {
    this.timeSlices = this.generateTimeSlices();
  }

  generateTimeSlices(): string[] {

    const timeSlices: string[] = [];

    for (let hour = TimeRulerComponent.START_HOUR; hour < TimeRulerComponent.END_HOUR; ++hour) {
      for (let minutes = 0; minutes < TimeRulerComponent.MINUTES_IN_HOUR; minutes += TimeRulerComponent.INTERVAL_IN_MINUTES) {
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

  calculateHeight(): number {
    return this.heightCalculatorService.calculateHeightFromMinutes(TimeRulerComponent.INTERVAL_IN_MINUTES);
  }
}
