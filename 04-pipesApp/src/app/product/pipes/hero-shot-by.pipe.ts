import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroShotBy',
})
export class HeroShotByPipe implements PipeTransform {
  transform(
    value: Hero[],
    shotBy: keyof Hero | null,
    orderAscend: boolean = true
  ): Hero[] {
    if (!shotBy) return value;

    return orderAscend
      ? value.sort((a, b) =>
          a[shotBy].toString().localeCompare(b[shotBy].toString())
        )
      : value.sort((a, b) =>
          b[shotBy].toString().localeCompare(a[shotBy].toString())
        );
  }
}
