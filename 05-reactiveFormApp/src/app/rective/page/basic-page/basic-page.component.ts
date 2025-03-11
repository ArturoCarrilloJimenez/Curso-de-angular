import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  isFormArray,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

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

  formBider = inject(FormBuilder);

  myForm: FormGroup = this.formBider.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(10)]],
    inStorage: [0, [Validators.required, Validators.min(0)]],
  });

  isValidField(fielName: string): boolean | null {
    return (
      this.myForm.controls[fielName].errors &&
      this.myForm.controls[fielName].touched
    );
  }

  getFielError(fielName: string): string | null {
    if (!this.myForm.controls[fielName]) return null;

    // Obtengo los errores
    const errors = this.myForm.controls[fielName].errors ?? {};

    for (let key of Object.keys(errors)) {
      // Según el error muestro un mensaje distinto
      switch (key) {
        case 'required':
          return 'Este campo es requerido';

        case 'minlength':
          return `Mínimo de ${errors['minlength'].requiredLength} caracteres`;

        case 'min':
          return `Debe ser mayor de ${errors['min'].min}`;
      }
    }

    return null;
  }

  onSave() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched(); // Toca todos los campos para mostrar la validación
      return;
    }

    console.log(this.myForm.value);

    this.myForm.reset(); // Respeta el form
  }
}
