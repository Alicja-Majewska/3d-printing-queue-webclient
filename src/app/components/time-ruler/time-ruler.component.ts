import {Component, OnInit} from '@angular/core';
import {HeightCalculatorService} from '../../services/height-calculator.service';
import {TimeComperatorService} from '../../services/time-comperator.service';

@Component({
  selector: 'app-time-ruler',
  templateUrl: './time-ruler.component.html',
  styleUrls: ['./time-ruler.component.scss']
})
export class TimeRulerComponent implements OnInit {

  timeSlices: string[];

  constructor(private heightCalculatorService: HeightCalculatorService) {
  }

  ngOnInit() {
    this.timeSlices = this.generateTimeSlices();
  }

  generateTimeSlices(): string[] {

    const timeSlices: string[] = [];

    for (let hour = TimeComperatorService.START_HOUR; hour < TimeComperatorService.END_HOUR; ++hour) {
      for (let minutes = 0; minutes < HeightCalculatorService.MINUTES_IN_HOUR; minutes += TimeComperatorService.INTERVAL_IN_MINUTES) {
        timeSlices.push(this.buildTimeSlice(hour, minutes));
      }
    }
    timeSlices.push(this.buildTimeSlice(TimeComperatorService.END_HOUR, 0));
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
    return this.heightCalculatorService.calculateHeightFromMinutes(TimeComperatorService.INTERVAL_IN_MINUTES);
  }
}
