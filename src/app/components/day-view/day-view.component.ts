import {Component, OnInit, Input} from '@angular/core';
import {Reservation} from '../../objects/Reservation';

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

  constructor() {
  }

  ngOnInit() {
  }

  getDayOfWeek(): string {
    switch (this.date.getDay()) {
      case 1:
        return "Poniedziałek";
      case 2:
        return "Wtorek";
      case 3:
        return "Środa";
      case 4:
        return "Czwartek";
      case 5:
        return "Piątek";
      case 6:
        return "Sobota";
      case 0:
        return "Niedziela"
    }
  }
}
