import { Component } from '@angular/core';
import reactiveRoutes from '../../../rective/page/reactive.routes';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import authRoutes from '../../../auth/page/auth.routes';
import countryRoutes from '../../../county/page/country.routes';

interface MenuItem {
  title: string,
  route: string
}

const reactiveRoute = reactiveRoutes[0].children ?? []
const authRoute = authRoutes[0].children ?? []
const countryRoute = countryRoutes ?? [];

@Component({
  selector: 'app-side-menu',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
})
export class SideMenuComponent {
  reactiveMenu: MenuItem[] = reactiveRoute
    .filter((element) => element.path !== '**')
    .map((element) => ({
      route: `reactive/${element.path}`,
      title: `${element.title}`,
    }));

  authMenu: MenuItem[] = authRoute
    .filter((element) => element.path !== '**')
    .map((element) => ({
      route: `auth/${element.path}`,
      title: `${element.title}`,
    }));

  countryMenu: MenuItem[] = countryRoute
    .filter((element) => element.path !== '**')
    .map((element) => ({
      route: `country/${element.path}`,
      title: `${element.title}`,
    }));

  constructor() {}
}
