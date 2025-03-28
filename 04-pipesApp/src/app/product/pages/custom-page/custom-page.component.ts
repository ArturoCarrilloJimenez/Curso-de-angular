import { Component, OnChanges, signal, SimpleChanges, WritableSignal } from '@angular/core';
import { heroes } from '../../data/heroes.data';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-custom-page',
  templateUrl: './custom-page.component.html',
  styleUrl: './custom-page.component.scss',
})
export class CustomPageComponent {
  name = signal('Arturo Carrillo Jimenez');
  upper = signal(false);

  heroes = signal(heroes ?? []);

  sortBy = signal<keyof Hero>('name');
  sortByOld = signal<keyof Hero | null>(null);

  orderAscend = signal(true);

  filterBy = signal('');

  updateSortBy(value: keyof Hero) {
    this.sortByOld.set(this.sortBy())
    this.sortBy.set(value)
  }

  isOrderAscend() {
    this.sortBy() == this.sortByOld()
      ? this.orderAscend.set(!this.orderAscend())
      : this.orderAscend.set(true);
  }
}
