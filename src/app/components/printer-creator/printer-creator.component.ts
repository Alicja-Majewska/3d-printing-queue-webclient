import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {cloneDeep} from 'lodash';
import {Guid} from 'guid-typescript';
import {NewPrinter} from '../../objects/NewPrinter';
import {PrinterQueueService} from '../../services/printer-queue.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-printer-creator',
  templateUrl: './printer-creator.component.html',
  styleUrls: ['./printer-creator.component.scss']
})
export class PrinterCreatorComponent implements OnInit {


  printerForm: FormGroup;

  constructor(private fb: FormBuilder, private printerQueueService: PrinterQueueService, private activeModal: NgbActiveModal) {
    this.printerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]]
    })
  }

  findFormField(formName: string): FormControl {
    return <FormControl>this.printerForm.get('name');
  }

  ngOnInit() {

  }

  accept() {
    const newPrinter = this.createNewReservationFromForm();
    let expected = true;
    this.printerQueueService.addPrinter(newPrinter).subscribe(
      result => expected = result
    );
    this.activeModal.close();
  }

  private createNewReservationFromForm(): NewPrinter {
    const printer = cloneDeep(this.printerForm.value);
    const guid: string = Guid.create().toString();
    const newPrinter: NewPrinter = new NewPrinter(guid, printer.name);
    return newPrinter;
  }

  decline() {
    this.activeModal.dismiss();
  }

  public dismiss(): void {
    this.activeModal.dismiss();
  }
}
