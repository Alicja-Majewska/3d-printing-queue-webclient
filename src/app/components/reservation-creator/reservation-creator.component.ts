import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PrinterQueueService} from '../../services/printer-queue.service';
import {cloneDeep} from 'lodash';
import {NewReservation} from '../../objects/NewReservation';
import {UserDataFactory} from '../../data/UserDataFactory';
import { Guid } from "guid-typescript";


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
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (this.reservationForm) {
      this.reservationForm.get('printerId').setValue(this.printerId);
      this.reservationForm.get('startDateTime').patchValue({
        date: this.selectedDate
      });
    }
  }

  addReservation() {
    if (this.reservationForm.valid) {
      const newReservation = this.createNewReservationFromForm();
      this.printerQueueService.addReservation(newReservation);
    }
  }

  private createNewReservationFromForm(): NewReservation {
    const reservation = cloneDeep(this.reservationForm.value);
    const startDateWithTime = this.mergeDateAndTime(reservation);
    const staticUser = UserDataFactory.getOne();
    const guid = Guid.create().toString();
    const durationInMinutes = Math.ceil(reservation.duration * 60);
    const newReservation = new NewReservation(reservation.printerId, reservation.name, durationInMinutes, startDateWithTime, staticUser.id, guid);
    return newReservation;
  }

  private mergeDateAndTime(reservation: any): Date {
    const startDateWithTime = reservation.startDateTime.date;
    startDateWithTime.setHours(reservation.startDateTime.time.hour);
    startDateWithTime.setMinutes(reservation.startDateTime.time.minute);
    return startDateWithTime;
  }

  private buildForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
      duration: [2, [Validators.required, Validators.min(1), Validators.max(50)]],
      printerId: [this.printerId, Validators.required],
      startDateTime: this.fb.group({
        time: ['', Validators.required],
        date: [this.selectedDate, Validators.required]
      })
    })
  }

  findFormField(name: string) {
    return this.reservationForm.get(name);
  }

}
