import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {PrinterQueueService} from '../../services/printer-queue.service';
import {Reservation} from '../../objects/Reservation';
import {Printer} from '../../objects/Printer';

@Component({
  selector: 'app-week-view',
  templateUrl: './week-view.component.html',
  styleUrls: ['./week-view.component.scss']
})
export class WeekViewComponent implements OnInit, OnChanges {


  @Input()
  printer: Printer;
  sortedReservations: Map<Date, Reservation[]> = new Map<Date, Reservation[]>();

  @Input()
  selectedDate: Date;

  private startOfWeek: Date;
  private endOfWeek: Date;
  daysInWeekOrdered: Date[];

  constructor(private printerQueueService: PrinterQueueService) {
  }

  ngOnInit() {
    const reservations = this.printerQueueService.fetchReservations(this.startOfWeek, this.endOfWeek, this.printer.id);
    this.daysInWeekOrdered = this.generateDaysInWeek();
    this.sortReservations(reservations);
  }

  private sortReservations(reservations: Reservation[]) {
    this.sortedReservations.clear();
    this.daysInWeekOrdered.forEach(date => {
      this.sortedReservations.set(date, this.findReservationFromDate(reservations, date));
    });
  }

  findReservationFromDate(reservations: Reservation[], date): Reservation[] {
    return reservations.filter(reservation => this.areInTheSameDay(reservation, date));
  }

  ngOnChanges(changes: SimpleChanges): void {

    //TODO chain observables
    const reservations = this.printerQueueService.fetchReservations(this.startOfWeek, this.endOfWeek, this.printer.id);
    this.daysInWeekOrdered = this.generateDaysInWeek();
    this.sortReservations(reservations);
  }

  generateDaysInWeek(): Date[] {

    let allDaysOfWeek: Date[] = [];
    allDaysOfWeek = allDaysOfWeek.concat(this.findDaysBefore());
    allDaysOfWeek.push(this.selectedDate);
    allDaysOfWeek = allDaysOfWeek.concat(this.findDaysAfter());

    return allDaysOfWeek;
  }

  getReservationsForDay(day: Date): Reservation[] {
    return this.sortedReservations && this.sortedReservations .get(day) || [];
  }

  private findDaysAfter(): Date[] {
    const daysAfter: Date[] = [];
    const dayOfWeek = this.selectedDate.getDay();
    if (dayOfWeek === 0) {
      dayOfWeek = 7;
    }
    for (let i = 1; dayOfWeek + i <= 7; ++i) {
      const dateAfter = new Date(this.selectedDate);
      dateAfter.setDate(dateAfter.getDate() + i);
      daysAfter.push(dateAfter);
    }
    return daysAfter;
  }


  private findDaysBefore(): Date[] {
    const daysBefore: Date[] = [];
    let dayOfWeek = this.selectedDate.getDay();
    if (dayOfWeek === 0) {
      dayOfWeek = 7;
    }
    for (let i = dayOfWeek - 1; i > 0; --i) {
      const dateBefore = new Date(this.selectedDate);
      dateBefore.setDate(dateBefore.getDate() - i);
      daysBefore.push(dateBefore);
    }
    return daysBefore;
  }

  private areInTheSameDay(reservation: Reservation, date: Date): boolean {
    const startDate = reservation.startDate;
    var result = startDate.getFullYear === date.getFullYear
      && startDate.getMonth() === date.getMonth()
      && startDate.getDate() === date.getDate();
    return result;
  }
}
