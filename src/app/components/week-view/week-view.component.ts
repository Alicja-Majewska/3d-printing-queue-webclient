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
  reservations: Reservation[];

  @Input()
  selectedDate: Date;

  private startOfWeek: Date;
  private endOfWeek: Date;

  constructor(private printerQueueService: PrinterQueueService) {
  }

  ngOnInit() {
    this.reservations = this.printerQueueService.fetchReservations(this.startOfWeek, this.endOfWeek, this.printer.id);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.generateDaysInWeek();
  }

  generateDaysInWeek(): Date[] {
    const day = this.selectedDate.getDay();
    let allDaysOfWeek: Date[] = [];

    allDaysOfWeek = allDaysOfWeek.concat(this.findDaysBefore());
    allDaysOfWeek.push(this.selectedDate);
    allDaysOfWeek = allDaysOfWeek.concat(this.findDaysAfter());


    return allDaysOfWeek;
  }

  private findDaysAfter(): Date[]  {
    const daysAfter: Date[] = [];
    const dayOfWeek = this.selectedDate.getDay();
    for(let i = 1; dayOfWeek + i  <= 7; ++i) {
      const dateAfter = new Date(this.selectedDate);
      dateAfter.setDate(dateAfter.getDate() + i);
      daysAfter.push(dateAfter);
    }
    return daysAfter;
  }


  private findDaysBefore(): Date[]  {
    const daysBefore: Date[] = [];
    const dayOfWeek = this.selectedDate.getDay();
    for(let i = dayOfWeek - 1; i > 0; --i) {
      const dateBefore = new Date(this.selectedDate);
      dateBefore.setDate(dateBefore.getDate() - i);
      daysBefore.push(dateBefore);
    }
    return daysBefore;
  }

}
