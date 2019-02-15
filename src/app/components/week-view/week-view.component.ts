import {Component, OnInit, Input} from '@angular/core';
import {PrinterQueueService} from '../../services/printer-queue.service';
import {Reservation} from '../../objects/Reservation';
import {Printer} from '../../objects/Printer';
import {NgbDate} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-week-view',
  templateUrl: './week-view.component.html',
  styleUrls: ['./week-view.component.scss']
})
export class WeekViewComponent implements OnInit {

  @Input()
  printer: Printer;
  reservations: Reservation[];

  @Input()
  selectedDate: NgbDate;

  private startDate: Date;
  private endDate: Date;

  constructor(private printerQueueService: PrinterQueueService) {
  }

  ngOnInit() {
    this.reservations = this.printerQueueService.fetchReservations(this.startDate, this.endDate, this.printer.id);
  }

  generateDayForWeek(): Date[] {
return [];
  }

}
