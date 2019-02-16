import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {PrinterQueueService} from '../../services/printer-queue.service';
import {Reservation} from '../../objects/Reservation';
import {Printer} from '../../objects/Printer';
import {TimeComperatorService} from '../../services/time-comperator.service';
import {OnInit} from '@angular/core';

@Component({
  selector: 'app-week-view',
  templateUrl: './week-view.component.html',
  styleUrls: ['./week-view.component.scss']
})
export class WeekViewComponent implements OnChanges, OnInit {

  static readonly MONDAY: number = 1;
  static readonly SUNDAY: number = 7;


  @Input()
  printer: Printer;
  sortedReservations: Map<Date, Reservation[]> = new Map<Date, Reservation[]>();

  @Input()
  selectedDate: Date;

  private startOfWeek: Date;
  private endOfWeek: Date;
  daysInWeekOrdered: Date[];

  constructor(private printerQueueService: PrinterQueueService, private timeComparatorService: TimeComperatorService) {
  }


  private sortReservations(reservations: Reservation[]) {
    this.sortedReservations.clear();
    this.daysInWeekOrdered.forEach(date => {
      this.sortedReservations.set(date, this.findReservationFromDate(reservations, date));
    });
  }

  findReservationFromDate(reservations: Reservation[], currentDate): Reservation[] {
    return reservations.filter(reservation =>
    this.timeComparatorService.haveDatesTheSameDay(reservation.startDate, currentDate)
    || this.timeComparatorService.isCurrentDateBetweenStartAndStopDates(currentDate, reservation.startDate, reservation.stopDate)
    || this.timeComparatorService.haveDatesTheSameDay(reservation.stopDate, currentDate));
  }


  ngOnInit(): void {
    this.reloadData();
  }

  private reloadData(){
      this.daysInWeekOrdered = this.generateDaysInWeek();
      this.startOfWeek = this.daysInWeekOrdered[0];
      this.endOfWeek = this.daysInWeekOrdered[6];

      if (this.printer && this.printer.id) {
        this.printerQueueService.fetchReservations(this.startOfWeek, this.endOfWeek, this.printer.id)
          .subscribe(reservation => {
              const reservations = reservation;
              this.sortReservations(reservations);
                      }
                  )
          }
      }

  ngOnChanges(changes: SimpleChanges): void {
    this.reloadData();
  }

  generateDaysInWeek(): Date[] {

    let allDaysOfWeek: Date[] = [];
    allDaysOfWeek = allDaysOfWeek.concat(this.findDaysBefore());
    allDaysOfWeek.push(this.selectedDate);
    allDaysOfWeek = allDaysOfWeek.concat(this.findDaysAfter());

    return allDaysOfWeek;
  }

  getReservationsForDay(day: Date): Reservation[] {
    return this.sortedReservations && this.sortedReservations.get(day) || [];
  }

  private findDaysAfter(): Date[] {
    const daysAfter: Date[] = [];
    const selectedDayOfWeek = this.getDayOfWeek(this.selectedDate);
    for (let i = WeekViewComponent.MONDAY; selectedDayOfWeek + i <= WeekViewComponent.SUNDAY; ++i) {
      const dateAfter = new Date(this.selectedDate);
      dateAfter.setDate(dateAfter.getDate() + i);
      daysAfter.push(dateAfter);
    }
    return daysAfter;
  }

  private getDayOfWeek(date: Date): number {
    let dayOfWeek = date.getDay();
    if (dayOfWeek === 0) {
      dayOfWeek = WeekViewComponent.SUNDAY;
    }
    return dayOfWeek;
  }

  private findDaysBefore(): Date[] {
    const daysBefore: Date[] = [];
    const selectedDayOfWeek = this.getDayOfWeek(this.selectedDate);
    for (let i = selectedDayOfWeek - 1; i > 0; --i) {
      const dateBefore = new Date(this.selectedDate);
      dateBefore.setDate(dateBefore.getDate() - i);
      daysBefore.push(dateBefore);
    }
    return daysBefore;
  }

  getNameOfWeekDay(date: Date): string {
    switch (date.getDay()) {
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
