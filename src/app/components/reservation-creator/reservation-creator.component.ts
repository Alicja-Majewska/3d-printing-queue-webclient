import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PrinterQueueService} from '../../services/printer-queue.service';
import {cloneDeep} from 'lodash';


@Component({
  selector: 'app-reservation-creator',
  templateUrl: './reservation-creator.component.html',
  styleUrls: ['./reservation-creator.component.scss']
})
export class ReservationCreatorComponent implements OnInit, OnChanges {

  reservationForm: FormGroup;

  @Input()
  printerId: string;

  @Input()
  selectedDate: string;

  constructor(private fb: FormBuilder, private printerQueueService: PrinterQueueService) {

  }

  ngOnInit() {
    this.reservationForm = this.buildForm();
    console.log(this.reservationForm);
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (this.reservationForm)
      this.reservationForm.get('startDateTime').patchValue({
        date: this.selectedDate
      });
    console.log(this.reservationForm);
  }


  // this.templateForm.patchValue({
//   name: this.template.name,
//   startDate: this.ngbDateConverter.getNgbDate(this.template.startDate),
//   endDate: this.ngbDateConverter.getNgbDate(this.template.endDate),
//   templateDescription: this.template.description,
// });
  addReservation() {
    if (this.reservationForm.valid) {
      const reservation = cloneDeep(this.reservationForm.value);
      console.log(reservation);
    }
  }

  private buildForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      duration: [2, Validators.required],
      printerId: [this.printerId, Validators.required],
      startDateTime: this.fb.group({
        time: ['', Validators.required],
        date: [this.selectedDate, Validators.required]
      })
    })
  }
}
