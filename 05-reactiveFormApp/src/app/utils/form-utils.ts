import { FormArray, FormGroup, ValidationErrors } from '@angular/forms';

export class FormUtils {
  static errorController(errors: ValidationErrors): string | null {
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

  static isValidField(form: FormGroup, fielName: string): boolean | null {
    return form.controls[fielName].errors && form.controls[fielName].touched;
  }

  static getFielError(form: FormGroup, fielName: string): string | null {
    if (!form.controls[fielName]) return null;

    // Obtengo los errores
    const errors = form.controls[fielName].errors ?? {};

    return this.errorController(errors);
  }

  static isValidFieldInArray(formArray: FormArray, index: number) {
    return (
      formArray.controls[index].errors && formArray.controls[index].touched
    );
  }

  static getFielArrayError(form: FormArray, index: number): string | null {
    if (form.controls.length == 0) return null;

    // Obtengo los errores
    const errors = form.controls[index].errors ?? {};

    return this.errorController(errors);
  }
}
