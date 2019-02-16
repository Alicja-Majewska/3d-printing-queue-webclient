import {Component, OnInit, Input} from '@angular/core';
import {Reservation} from '../../objects/Reservation';
import {HeightCalculatorService} from '../../services/height-calculator.service';
import {TimeComperatorService} from '../../services/time-comperator.service';

@Component({
  selector: 'app-day-view',
  templateUrl: './day-view.component.html',
  styleUrls: ['./day-view.component.scss']
})
export class DayViewComponent implements OnInit {

  @Input()
  reservations: Reservation[];

  @Input()
  date: Date;

  constructor(private heightCalculatorService: HeightCalculatorService, private timeComparatorService: TimeComperatorService) {
  }

  ngOnInit() {
  }

  calculateOffset(reservation: Reservation): number {
    if (!this.timeComparatorService.haveDatesTheSameDay(reservation.startDate, this.date)) {
      return 0;
    }
    const hours = reservation.startDate.getHours() - TimeComperatorService.START_HOUR;
    const minutes = reservation.startDate.getMinutes();
    return this.heightCalculatorService.calculateHeightFromHoursAndMinutes(hours, minutes);
  }

}
