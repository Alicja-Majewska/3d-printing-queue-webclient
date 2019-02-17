import {Component, OnInit, Input} from '@angular/core';
import {PrinterStatus} from '../../objects/PrinterStatus';
import {Printer} from '../../objects/Printer';
import {ConfirmationComponent} from '../confirmation/confirmation.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-failure',
  templateUrl: './failure.component.html',
  styleUrls: ['./failure.component.scss']
})
export class FailureComponent implements OnInit {

  @Input()
  printer: Printer;

  constructor(private ngbModal: NgbModal) {
  }

  ngOnInit() {
  }

  reportFailure() {
    this.openModal('Zgłoś awarię');
  }

  reportFailureRepaired() {
    this.openModal('Naprawiłem awarię');
  }

  openModal(title: string): void {
    const modalRef = this.ngbModal.open(ConfirmationComponent, {size: 'lg'});
    modalRef.componentInstance.title = title;
    modalRef.result.then((result) => {
    }, () => {
    });
  }

}
