import { Component } from '@angular/core';
import { CountryService } from '../../services/conuntries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css',
})
export class ByCapitalPageComponent {
  public countries: Country[] = [];
  public isLoading = false

  constructor(private countryService: CountryService) {}

  searchByCapital(text: string) {
    this.isLoading = true
    this.countryService.searchCapital(text).subscribe((countries) => {
      this.countries = countries
      this.isLoading = false
    });
  }
}
