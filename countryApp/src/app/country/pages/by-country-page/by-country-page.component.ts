import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/conuntries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css',
})
export class ByCountryPageComponent {
  public countrys: Country[] = [];
  public isLoading = false;

  constructor(private countryService: CountryService) {}

  searchByCountry(text: string) {
    this.isLoading = true;
    this.countryService.searchCountry(text).subscribe((countrys) => {
      this.countrys = countrys;
      this.isLoading = false;
    });
  }
}
