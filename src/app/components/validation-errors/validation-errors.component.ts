import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-validation-errors',
  templateUrl: './validation-errors.component.html',
  styleUrls: ['./validation-errors.component.scss']
})
export class ValidationErrorsComponent implements OnInit {

  @Input()
  formField: AbstractControl;

  validationErrorNames: string[] = [];

  constructor() {
  }

  ngOnInit() {
    this.fillValidationErrorNames();
    this.formField.statusChanges.subscribe(() => {
      this.validationErrorNames = [];
      this.fillValidationErrorNames();
    })
  }

  shouldShowError(): boolean {
    return (this.formField.touched || false) && this.formField.invalid;
  }

  private fillValidationErrorNames() {
    if (this.formField.errors) {
      for (let errorName of Object.keys(this.formField.errors)) {
        this.validationErrorNames.push(errorName);
      }
    }
  }

}
