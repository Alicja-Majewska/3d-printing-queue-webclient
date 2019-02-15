import { Injectable } from '@angular/core';
import {Printer} from '../objects/Printer';
import {PrintersDataFactory} from '../data/PrintersDataFactory';
import {Reservation} from '../objects/Reservation';

@Injectable({
  providedIn: 'root'
})
export class PrinterQueueService {

  constructor() { }

  fetchPrinters(): Printer[] {
    return Printer.fromBackends(PrintersDataFactory.getMany());
  }

  fetchReservations(dateStart: Date, dateEnd: Date, printerId: number) : Reservation[] {
    return [];
  }


}
