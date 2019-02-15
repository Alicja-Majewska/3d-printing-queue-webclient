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

  
}
