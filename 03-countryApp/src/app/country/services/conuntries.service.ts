import { HttpClient } from '@angular/common/http';
import { Injectable, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Country } from '../interfaces/country';
import { catchError, delay, map, Observable, of, tap } from 'rxjs';
import { CacheStore } from '../interfaces/cache-store.interfece';
import { Region } from '../interfaces/region.type';

@Injectable({ providedIn: 'root' })
export class CountryService {
  private apiURL: string = 'https://restcountries.com/v3.1';

  public cacheStore: CacheStore = {
    byCapital: { term: '', counties: [] },
    byCountries: { term: '', counties: [] },
    byRegion: { counties: [] },
  };

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
  }

  private saveLocalStorage() {
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
  }

  private loadLocalStorage() {
    localStorage.getItem('cacheStore')
      ? (this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!))
      : '';
  }

  private getHttpRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url).pipe(catchError((error) => of([])));
  }

  searchCountryByAlphaCode(alphaCode: string): Observable<Country | null> {
    const url: string = `${this.apiURL}/alpha/${alphaCode}`;
    return this.http.get<Country[]>(url).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError((error) => of(null))
    );
  }

  searchCapital(capital: string): Observable<Country[]> {
    const url: string = `${this.apiURL}/capital/${capital}`;
    return this.getHttpRequest(url).pipe(
      tap((countries) => {
        this.cacheStore.byCapital = { term: capital, counties: countries };
        this.saveLocalStorage();
      })
    );
  }

  searchCountry(name: string): Observable<Country[]> {
    const url: string = `${this.apiURL}/name/${name}`;
    return this.getHttpRequest(url).pipe(
      tap((countries) => {
        this.cacheStore.byCountries = { term: name, counties: countries };
        this.saveLocalStorage();
      })
    );
  }

  searchRegion(region: Region): Observable<Country[]> {
    const url: string = `${this.apiURL}/region/${region}`;
    return this.getHttpRequest(url).pipe(
      tap((countries) => {
        this.cacheStore.byRegion = { term: region, counties: countries };
        this.saveLocalStorage();
      })
    );
  }
}
