import { CommonModule, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';

@Component({
  selector: 'app-dinamic-page',
  imports: [JsonPipe, ReactiveFormsModule, CommonModule],
  templateUrl: './dinamic-page.component.html',
  styleUrl: './dinamic-page.component.scss',
})
export class DinamicPageComponent {
  private fb = inject(FormBuilder);

  formUtils = FormUtils;

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGame: this.fb.array(
      [
        ['Prueba 1', Validators.required],
        ['Prueba 2', Validators.required],
      ],
      Validators.minLength(3)
    ),
  });

  newFavorite = this.fb.control([], Validators.required)

  public get favoriteGame() {
    return this.myForm.get('favoriteGame') as FormArray;
  }

  onAddToFavorites() {
    if (this.newFavorite.invalid) {
      this.newFavorite.markAllAsTouched(); // Toca todos los campos para mostrar la validación
      return;
    }

    const newFavoriteValue = this.newFavorite.value
    this.newFavorite.reset()

    this.favoriteGame.push(this.fb.control(newFavoriteValue, Validators.required))
  }

  onDeleteFavorites (index: number) {
    this.favoriteGame.removeAt(index)
  }

  // TODO hacer el envió
}
