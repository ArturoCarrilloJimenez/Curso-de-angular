import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/conuntries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css',
})
export class ByRegionPageComponent {
  public regions: Country[] = [];
  public isLoading = false

  constructor(private countryService: CountryService) {}

  searchByRegion(text: string) {
    this.isLoading = true
    this.countryService.searchRegion(text).subscribe((regions) =>  {
      this.regions = regions
      this.isLoading = false
    })
  }
}
