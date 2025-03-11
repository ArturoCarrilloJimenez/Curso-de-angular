import { FormGroup } from '@angular/forms';

export class FormUtils {
  static isValidField(form: FormGroup, fielName: string): boolean | null {
    return form.controls[fielName].errors && form.controls[fielName].touched;
  }

  static getFielError(form: FormGroup, fielName: string): string | null {
    if (!form.controls[fielName]) return null;

    // Obtengo los errores
    const errors = form.controls[fielName].errors ?? {};

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
}
