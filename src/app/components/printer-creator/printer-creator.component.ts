import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-printer-creator',
  templateUrl: './printer-creator.component.html',
  styleUrls: ['./printer-creator.component.scss']
})
export class PrinterCreatorComponent implements OnInit {


  printerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.printerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]]
    })
  }
  findFormField(formName: string): FormControl{
    return <FormControl>this.printerForm.get('name');
  }

  ngOnInit() {

  }

  accept() {

  }

  decline() {

  }

  dismiss() {

  }
}
