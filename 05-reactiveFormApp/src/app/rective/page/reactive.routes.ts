import { Routes } from '@angular/router';
import { BasicPageComponent } from './basic-page/basic-page.component';
import { DinamicPageComponent } from './dinamic-page/dinamic-page.component';
import { SwichesPageComponent } from './swiches-page/swiches-page.component';

export const reactiveRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basic',
        title: 'Básicos',
        component: BasicPageComponent,
      },
      {
        path: 'dynamic',
        title: 'Dinámicos',
        component: DinamicPageComponent,
      },
      {
        path: 'switches',
        title: 'Switches',
        component: SwichesPageComponent,
      },
      {
        path: '**',
        redirectTo: 'basic',
      },
    ],
  },
];

export default reactiveRoutes
