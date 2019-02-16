import {Injectable} from '@angular/core';
import {Printer} from '../objects/Printer';
import {Reservation} from '../objects/Reservation';
import {NewReservation} from '../objects/NewReservation';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Observable, throwError, of} from 'rxjs';
import {NewPrinter} from '../objects/NewPrinter';
import {map, catchError} from 'rxjs/operators';
import {PrinterBackend} from '../objects/PrinterBackend';
import {DatePipe} from '@angular/common';
import {ReservationBackend} from '../objects/ReservationBackend';
import {PrintersDataFactory} from '../data/PrintersDataFactory';
import {ReservationDataFactory} from '../data/ReservationDataFactory';

@Injectable({
  providedIn: 'root'
})
export class PrinterQueueService {

  constructor(private http: HttpClient, private datePipe: DatePipe) {
  }

  fetchPrinters(): Observable<Printer[]> {
    const url = 'query/printers';
    const printers = this.http.get<PrinterBackend[]>(url).pipe(
      map((printers: PrinterBackend[]) => Printer.fromBackends(printers))
    );

    //return printers;
    return of(Printer.fromBackends(PrintersDataFactory.getMany()));
  }

  fetchReservations(dateStart: Date, dateEnd: Date, printerId: string): Observable<Reservation[]> {

    const url = 'query/printings';
    let params = new HttpParams();
    params = params.set("printerId", printerId);
    params = params.set("from", this.datePipe.transform(dateStart, 'yyyy-MM-dd'));
    params = params.set("to", this.datePipe.transform(dateEnd, 'yyyy-MM-dd'));

    const reservations = this.http.get<ReservationBackend[]>(url, { params: params})
      .pipe(
        map((reservations: ReservationBackend[]) => Reservation.fromBackends(reservations))
      );
    // return reservations;
     return of(Reservation.fromBackends(ReservationDataFactory.getMany()));
  }

  addReservation(newReservation: NewReservation): void {

  }

  addPrinter(newPrinter: NewPrinter): Observable<boolean> {
    console.log('try to add new printer');
    const url = 'printers';
    //TODO co ma zwracac?
    return this.http.post<boolean>(url, newPrinter.toBackend()).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
