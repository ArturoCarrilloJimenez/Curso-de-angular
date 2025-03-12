import {
  Component,
  effect,
  inject,
  OnChanges,
  signal,
  SimpleChanges,
} from '@angular/core';
import { CountyService } from '../../county.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Country } from '../../interface/country.interface';
import { tap } from 'rxjs';

@Component({
  selector: 'app-country-page',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.scss',
})
export class CountryPageComponent {
  private fb = inject(FormBuilder);
  private countryService = inject(CountyService);

  regions = signal(this.countryService.region);
  countryByRegion = signal<Country[]>([]);
  border = signal<Country[]>([]);

  myForm: FormGroup = this.fb.group({
    region: ['', Validators.required],
    country: ['', Validators.required],
    border: ['', Validators.required],
  });

  onFormChange = effect((onCleanUp) => {
    const formRegionChanged = this.getRegionChanged();
    const formCountryChanged = this.getCountryChanged();

    onCleanUp(() => {
      formRegionChanged?.unsubscribe();
    });
  });

  getRegionChanged() {
    return this.myForm
      .get('region')
      ?.valueChanges.pipe(
        tap(() => this.myForm.controls['country'].setValue('')),
        tap(() => this.myForm.controls['border'].setValue(''))
      )
      .subscribe((value: string) => {
        value !== ''
          ? this.countryService
              .getCountriesByRegion(value)
              .subscribe((element) => {
                this.countryByRegion.set(element);
                console.log(element);
              })
          : null;
        console.log(this.countryByRegion());
      });
  }

  getCountryChanged() {
    return this.myForm
      .get('country')
      ?.valueChanges.subscribe((value: string) => {
        value !== ''
          ? this.countryService
              .getCountryByAlphaCode(value)
              .subscribe((element) => {
                this.countryService.getCountryNamesByCodeArray(
                  element[0].borders
                );
              })
          : null;
          console.log('border');

        console.log(this.border());
      });
  }
}
