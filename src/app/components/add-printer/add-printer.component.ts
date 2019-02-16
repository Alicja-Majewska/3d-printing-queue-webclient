import {Component, OnInit} from '@angular/core';
import {PrinterCreatorComponent} from '../printer-creator/printer-creator.component';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-printer',
  templateUrl: './add-printer.component.html',
  styleUrls: ['./add-printer.component.scss']
})
export class AddPrinterComponent implements OnInit {

  constructor(private ngbModal: NgbModal) {
  }

  ngOnInit() {
  }

  addPrinter() {
    this.openMainRewardModal();
  }

  openMainRewardModal(): void {
    const modalRef = this.ngbModal.open(PrinterCreatorComponent, {size: 'lg'});

    // modalRef.componentInstance.actualReward = this.buildRewardForm();


    modalRef.result.then((result) => {
      // this.rewards.push(result);
    }, () => {
    });

  }
}
