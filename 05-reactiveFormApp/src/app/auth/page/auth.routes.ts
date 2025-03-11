import { Routes } from '@angular/router';
import { RegisterPageComponent } from './register-page/register-page.component';

export const authRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'sign-up',
        title: 'Registro',
        component: RegisterPageComponent,
      },
      {
        path: '**',
        redirectTo: 'sign-up',
      },
    ],
  },
];

export default authRoutes
