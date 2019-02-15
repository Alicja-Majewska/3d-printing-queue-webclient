import { Injectable } from '@angular/core';
import {Printer} from '../objects/Printer';
import {PrintersDataFactory} from '../data/PrintersDataFactory';

@Injectable({
  providedIn: 'root'
})
export class PrinterQueueService {

  constructor() { }

  fetchPrinters(): Printer[] {
    return Printer.fromBackends(PrintersDataFactory.getMany());
  }


}
