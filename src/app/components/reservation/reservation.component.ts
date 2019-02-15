import { Component, OnInit, Input } from '@angular/core';
import { Reservation } from 'src/app/objects/Reservation';
import { ReservationDataFactory } from 'src/app/data/ReservationDataFactory';
import { ReservationBackend } from 'src/app/objects/ReservationBackend';
import { HeightCalculatorService } from 'src/app/services/height-calculator.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  constructor(private heightCalculatorService: HeightCalculatorService) { }

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

}
