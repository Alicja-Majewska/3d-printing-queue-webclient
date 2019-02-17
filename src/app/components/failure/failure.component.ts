import {Component, OnInit, Input} from '@angular/core';
import {PrinterStatus} from '../../objects/PrinterStatus';
import {Printer} from '../../objects/Printer';

@Component({
  selector: 'app-failure',
  templateUrl: './failure.component.html',
  styleUrls: ['./failure.component.scss']
})
export class FailureComponent implements OnInit {

  @Input()
  printer: Printer;

  constructor() {
  }

  ngOnInit() {
  }

  reportFailure() {

  }

  reportFailureRepaired() {

  }

}
