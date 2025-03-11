import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';

@Component({
  selector: 'app-swiches-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './swiches-page.component.html',
  styleUrl: './swiches-page.component.scss',
})
export class SwichesPageComponent {
  private fb = inject(FormBuilder);

  formUtil = FormUtils;

  myForm: FormGroup = this.fb.group({
    gerder: ['M', Validators.required],
    wathNotifications: [true],
    termIsAcepte: [false, Validators.requiredTrue],
  });

  onSubmit() {
    this.myForm.markAllAsTouched();

    console.log(this.myForm.value);
  }
}
