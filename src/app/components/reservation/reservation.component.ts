import { Component, OnInit, Input } from '@angular/core';
import { Reservation } from 'src/app/objects/Reservation';
import { ReservationDataFactory } from 'src/app/data/ReservationDataFactory';
import { ReservationBackend } from 'src/app/objects/ReservationBackend';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  constructor() { }

  @Input()
  reservation: Reservation;

  ngOnInit() {
    this.reservation = Reservation.fromBackend(ReservationDataFactory.getOne());
    console.log(this.reservation);

  }

}
