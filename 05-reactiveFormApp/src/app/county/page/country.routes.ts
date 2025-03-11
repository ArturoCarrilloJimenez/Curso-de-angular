import { Routes } from '@angular/router';
import { CountryPageComponent } from './country-page/country-page.component';

export const countryRoutes: Routes = [
  {
    path: '',
    title: 'Country',
    component: CountryPageComponent
  },
];

export default countryRoutes
