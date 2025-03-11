import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'reactive',
    loadChildren: () => import('./rective/page/reactive.routes'),
  },
  {
    path: 'country',
    loadChildren: () => import('./county/page/country.routes'),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/page/auth.routes'),
  },
  {
    path: '**',
    redirectTo: 'reactive',
  },
];
