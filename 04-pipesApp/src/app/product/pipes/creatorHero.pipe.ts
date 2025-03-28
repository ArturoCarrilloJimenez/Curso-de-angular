import { Pipe, PipeTransform } from '@angular/core';
import { Creator } from '../interfaces/hero.interface';

@Pipe({
  name: 'creatorHero',
})
export class CreatorHeroPipe implements PipeTransform {
  transform(value: number) {
    return Creator[value];
  }
}
