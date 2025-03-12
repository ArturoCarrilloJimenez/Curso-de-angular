import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { Country } from './interface/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountyService {
  private base = 'https://restcountries.com/v3.1';
  private http = inject(HttpClient);

  constructor() {}

  private _region = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  public get region(): string[] {
    return [...this._region];
  }

  getCountriesByRegion(region: string): Observable<Country[]> {
    if (!region) return of([]);

    const url = `${this.base}/region/${region}`;
    return this.http.get<Country[]>(url);
  }

  getCountryByAlphaCode(alfaCode: string): Observable<Country[]> {
    const url = `${this.base}/alpha/${alfaCode}`;
    return this.http.get<Country[]>(url);
  }

  // TODO falla la busqueda de pases fronterizos
  getCountryNamesByCodeArray(countryCodes: string[]): Observable<Country[]> {
    if (!countryCodes || countryCodes.length === 0) return of([]);

    const countriesRequest: Observable<Country[]>[] = [];

    countryCodes.map((code) => {
      const request = this.getCountryByAlphaCode(code);
      countriesRequest.push(request)
    });

    // Funcion que lo combina todo en un observable
    console.log(combineLatest(countriesRequest).subscribe(console.log));

    return of([]);
  }
}
