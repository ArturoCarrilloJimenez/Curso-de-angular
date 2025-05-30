import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          { label: 'Textos y fechas', icon: 'pi pi-align-left', routerLink: '/' },
          { label: 'Números', icon: 'pi pi-dollar', routerLink: 'number' },
          { label: 'No comunes', icon: 'pi pi-globe', routerLink: 'uncommon' },
        ],
      },
      {
        label: 'Pipes personalizado',
        icon: 'pi pi-cog',
        items: [{ label: 'Otros elementos', icon: 'pi pi-cog', routerLink: 'custom' }],
      },
    ];
  }
}
