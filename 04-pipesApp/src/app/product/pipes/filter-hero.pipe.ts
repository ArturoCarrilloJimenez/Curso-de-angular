import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'filterHero',
})
export class FilterHeroPipe implements PipeTransform {
  transform(value: Hero[], search: string): Hero[] {
    return search == ''
      ? value
      : value.filter((hero) => hero.name.toLowerCase().includes(search.toLowerCase()));
  }
}
