import {Component, OnInit, Input} from '@angular/core';
import {Reservation} from 'src/app/objects/Reservation';
import {HeightCalculatorService} from 'src/app/services/height-calculator.service';
import {TimeComperatorService} from 'src/app/services/time-comperator.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  constructor(private heightCalculatorService: HeightCalculatorService,
              private timeComperatorService: TimeComperatorService) {
  }

  @Input()
  reservation: Reservation;

  @Input()
  date: Date;

  ngOnInit() {
  }

  calculateReservationHeight(): number {
    if (!this.timeComperatorService.haveDatesTheSameDay(this.reservation.startDate, this.reservation.stopDate)) {
      return this.calculateHeightForSpecifiedDay();
    }
    return this.heightCalculatorService.calculateHeightFromHours(this.reservation.duration);
  }

  calculateTechnicalBreakHeight(): number {
    return Math.ceil(this.reservation.technicalBreak * HeightCalculatorService.PIXEL_TO_MINUTE_RATIO);
  }

  private calculateHeightForSpecifiedDay(): number {
    let startDate = this.reservation.startDate;
    let stopDate = this.reservation.stopDate;
    let startHourDate = this.copyDate(stopDate);
    startHourDate.setHours(TimeComperatorService.START_HOUR);
    let endHourDate = this.copyDate(startDate);
    endHourDate.setHours(TimeComperatorService.END_HOUR);

    if (this.isReservationStartedThisDay()) {
      return (this.heightCalculatorService.calculateHeightFromMinutes(this.calculateMinutes(endHourDate, this.reservation.startDate)) - this.calculateTechnicalBreakHeight());
    } else if (this.isReservationStoppedThisDay()) {
      return this.heightCalculatorService.calculateHeightFromMinutes(this.calculateMinutes(this.reservation.stopDate, startHourDate) - this.calculateTechnicalBreakHeight());
    } else {
      return this.heightCalculatorService.calculateHeightFromHours(this.calculateHours(TimeComperatorService.END_HOUR, TimeComperatorService.START_HOUR))

    }
  }

  copyDate(date: Date): Date {
    let newDate = new Date();
    newDate.setDate(date.getDate());
    newDate.setMinutes(0);
    newDate.setSeconds(0);
    return newDate;
  }

  private calculateHours(startHour: number, stopHour: number): number {
    return startHour - stopHour;
  }

  private calculateMinutes(startDate: Date, stopDate: Date): number {
    return Math.ceil((startDate.getTime() - stopDate.getTime()) / HeightCalculatorService.MILISEC_IN_MINUTE);
  }

  calculateSizeOfElements(): number {
    const scale = this.calculateReservationHeight();
    if (scale < 600) {
      return Math.ceil(scale / 16);
    } else {
      return 20;
    }
  }

  canReservationBeDeleted(): boolean {
    return this.timeComperatorService.isStartAfterCurrentDate(new Date(), this.reservation.startDate)
      && this.timeComperatorService.isStopAfterCurrentDate(new Date(), this.reservation.stopDate);
  }

  canReservationBeStopped(): boolean {
    return (this.timeComperatorService.isStartBeforeCurrentDate(new Date(), this.reservation.startDate)
    && this.timeComperatorService.isStopAfterCurrentDate(new Date(), this.reservation.stopDate));
  }

  isReservationStartedThisDay(): boolean {
    return this.timeComperatorService.haveDatesTheSameDay(this.reservation.startDate, this.date);
  }

  isReservationStoppedThisDay(): boolean {
    return this.timeComperatorService.haveDatesTheSameDay(this.reservation.stopDate, this.date)
  }


}
