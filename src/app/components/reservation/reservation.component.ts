import { Component, OnInit, Input } from '@angular/core';
import { Reservation } from 'src/app/objects/Reservation';
import { HeightCalculatorService } from 'src/app/services/height-calculator.service';
import { TimeComperatorService } from 'src/app/services/time-comperator.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  constructor(private heightCalculatorService: HeightCalculatorService,
    private timeComperatorService: TimeComperatorService) { }

  @Input()
  reservation: Reservation;

  ngOnInit() {
  }

  calculateHeight(): number {
    return this.heightCalculatorService.calculateHeightFromHours(this.reservation.duration);
  }

  calculateSizeOfElements(): number { 
    const scale = this.calculateHeight();
    if (scale < 600) {
      return  scale/ 16;
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

}
