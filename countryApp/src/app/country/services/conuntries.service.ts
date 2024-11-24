import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../interfaces/country';
import { catchError, delay, map, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CountryService {
  private apiURL: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  private getHttpRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url).pipe(
      catchError( error => of([]) ),
      delay(1000)
    )
  }

  searchCountryByAlphaCode(alphaCode: string): Observable<Country | null> {
    const url: string = `${this.apiURL}/alpha/${alphaCode}`
    return this.http.get<Country[]>(url)
      .pipe(
        map( countries => countries.length > 0 ? countries[0] : null ),
        catchError( error => of(null) )
      )
  }

  searchCapital(capital: string): Observable<Country[]> {
    const url: string = `${this.apiURL}/capital/${capital}`
    return this.getHttpRequest(url)
  }

  searchCountry(name: string): Observable<Country[]> {
    const url: string = `${this.apiURL}/name/${name}`
    return this.getHttpRequest(url)
  }

  searchRegion(region: string): Observable<Country[]> {
    const url: string = `${this.apiURL}/region/${region}`
    return this.getHttpRequest(url)
  }
}
