import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/conuntries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css',
})
export class ByCountryPageComponent implements OnInit {
  public countrys: Country[] = [];
  public initialValue = ''
  public isLoading = false;

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countrys = this.countryService.cacheStore.byCountries.counties
    this.initialValue = this.countryService.cacheStore.byCountries.term
  }

  searchByCountry(text: string) {
    this.isLoading = true;
    this.countryService.searchCountry(text).subscribe((countrys) => {
      this.countrys = countrys;
      this.isLoading = false;
    });
  }
}
