import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reservation-creator',
  templateUrl: './reservation-creator.component.html',
  styleUrls: ['./reservation-creator.component.scss']
})
export class ReservationCreatorComponent implements OnInit {

  reservationForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.reservationForm = this.buildForm();
  }

  private buildForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      duration: [0, Validators.required],
      startTime: ['', Validators.required],
      startDate: [new Date(), Validators.required] // not in the past
    })
  }
}
