import {Component, OnInit, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {cloneDeep} from 'lodash';
import {Guid} from 'guid-typescript';
import {PrinterQueueService} from '../../services/printer-queue.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  @Input()
  title: string;

  descriptionForm: FormGroup;

  constructor(private fb: FormBuilder, private printerQueueService: PrinterQueueService, private activeModal: NgbActiveModal) {
    this.descriptionForm = this.fb.group({
      description: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(4000)]]
    })
  }

  findFormField(formName: string): FormControl {
    return <FormControl>this.descriptionForm.get(formName);
  }


  ngOnInit() {
  }


  accept() {

    this.activeModal.close();
  }


  decline() {
    this.activeModal.dismiss();
  }

  public dismiss(): void {
    this.activeModal.dismiss();
  }
}
