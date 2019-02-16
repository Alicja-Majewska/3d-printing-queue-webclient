import {Injectable} from '@angular/core';
import {Printer} from '../objects/Printer';
import {PrintersDataFactory} from '../data/PrintersDataFactory';
import {Reservation} from '../objects/Reservation';
import {ReservationDataFactory} from '../data/ReservationDataFactory';
import {NewReservation} from '../objects/NewReservation';

@Injectable({
  providedIn: 'root'
})
export class PrinterQueueService {

  constructor() {
  }

  fetchPrinters(): Printer[] {
    return Printer.fromBackends(PrintersDataFactory.getMany());
  }

  fetchReservations(dateStart: Date, dateEnd: Date, printerId: string): Reservation[] {
    return Reservation.fromBackends(ReservationDataFactory.getMany());
  }

  addReservation(newReservation: NewReservation): void {
    
  }
}
