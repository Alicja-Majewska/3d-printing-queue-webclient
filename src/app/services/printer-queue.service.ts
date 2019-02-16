import {Injectable} from '@angular/core';
import {Printer} from '../objects/Printer';
import {PrintersDataFactory} from '../data/PrintersDataFactory';
import {Reservation} from '../objects/Reservation';
import {ReservationDataFactory} from '../data/ReservationDataFactory';
import {NewReservation} from '../objects/NewReservation';
import {HttpClient} from '@angular/common/http';
import {PrinterBackend} from '../objects/PrinterBackend';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrinterQueueService {

  constructor(private http: HttpClient) {
  }

  fetchPrinters(): Observable<Printer[]> {
    const url = 'query/printers';
    const printers = this.http.get<PrinterBackend[]>(url).pipe(
      map(
        (printers: PrinterBackend[]) => {
          return Printer.fromBackends(printers);
        })
    );

    return printers;
    // return of(Printer.fromBackends(PrintersDataFactory.getMany()));
  }

  fetchReservations(dateStart: Date, dateEnd: Date, printerId: string): Reservation[] {
    return Reservation.fromBackends(ReservationDataFactory.getMany());
  }

  addReservation(newReservation: NewReservation): void {

  }
}
