import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/conuntries.service';
import { Region } from '../../interfaces/region.type';



@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css',
})
export class ByRegionPageComponent implements OnInit {
  public regions: Country[] = [];

  public regionsValid: Region[] = [
    'Africa',
    'Asia',
    'America',
    'Europe',
    'Oceania',
  ];
  public selectedRegion?: Region;

  public isLoading = false;

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.regions = this.countryService.cacheStore.byRegion.counties
    this.selectedRegion = this.countryService.cacheStore.byRegion.term
  }

  searchByRegion(text: Region) {
    this.isLoading = true;
    this.selectedRegion = text
    this.countryService.searchRegion(text).subscribe((regions) => {
      this.regions = regions;
      this.isLoading = false;
    });
  }
}
