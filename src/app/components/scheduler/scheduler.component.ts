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

  convertFromNgbDate() : Date {
    return this.selectedDate && new Date(this.selectedDate.year, this.selectedDate.month, this.selectedDate.day) || new Date();
  }

  ngOnInit() {
    this.printers = this.printerQueueService.fetchPrinters();
    this.selectedPrinter = this.printers && this.printers.length > 1 && this.printers[0] || null;
  }

  isPrinterBroken(printer: Printer) : boolean {
    return printer.status == PrinterStatus.BROKEN;
  }
}
