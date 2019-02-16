import {Component, OnInit} from '@angular/core';
import {Printer} from '../../objects/Printer';
import {PrinterQueueService} from '../../services/printer-queue.service';
import {PrinterStatus} from '../../objects/PrinterStatus';
import {NgbDate} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss']
})
export class SchedulerComponent implements OnInit {

  constructor(private printerQueueService: PrinterQueueService) {
  }

  selectedDate: NgbDate;
  printers: Printer[];
  selectedPrinter: Printer;

  ngOnInit() {
    this.printerQueueService.fetchPrinters().subscribe(printers => {
      this.printers = printers;
      this.selectedPrinter = this.printers && this.printers.length > 1 && this.printers[0] || null;
    });
    this.selectedDate = this.getDefaultDate();
  }

  convertFromNgbDate(): Date {
    return this.selectedDate && new Date(this.selectedDate.year, this.selectedDate.month - 1, this.selectedDate.day) || new Date();
  }

  getDefaultDate(): NgbDate {
    const now = new Date();
    return new NgbDate(now.getFullYear(), now.getMonth() + 1, now.getDate());
  }

  isPrinterBroken(printer: Printer): boolean {
    return printer && printer.status == PrinterStatus.BROKEN;
  }
}
