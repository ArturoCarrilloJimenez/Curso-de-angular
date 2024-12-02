import { Country } from './country';
import { Region } from './region.type';

export interface CacheStore {
  byCapital: TermCountries;
  byCountries: TermCountries;
  byRegion: TermRegion;
}

export interface TermCountries {
  term: string;
  counties: Country[];
}

export interface TermRegion {
  term?: Region;
  counties: Country[];
}
