import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/conuntries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css',
})
export class ByCapitalPageComponent implements OnInit {
  public countries: Country[] = [];
  public initialValue = ''
  public isLoading = false

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byCapital.counties
    this.initialValue = this.countryService.cacheStore.byCapital.term
  }

  searchByCapital(text: string) {
    this.isLoading = true
    this.countryService.searchCapital(text).subscribe((countries) => {
      this.countries = countries
      this.isLoading = false
    });
  }
}
