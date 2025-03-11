import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  isFormArray,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';

@Component({
  selector: 'app-basic-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.scss',
})
export class BasicPageComponent {
  // myForm = new FormGroup({
  //   name: new FormControl(''),
  //   price: new FormControl(0),
  //   inStorage: new FormControl(0),
  // });

  private formBider = inject(FormBuilder);

  myForm: FormGroup = this.formBider.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(10)]],
    inStorage: [0, [Validators.required, Validators.min(0)]],
  });

  formUtil = FormUtils;

  onSave() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched(); // Toca todos los campos para mostrar la validación
      return;
    }

    console.log(this.myForm.value);

    this.myForm.reset(); // Respeta el form
  }
}
