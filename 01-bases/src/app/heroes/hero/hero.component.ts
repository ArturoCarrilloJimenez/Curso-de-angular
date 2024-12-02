import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'IronMan';
  public age: number = 18;

  get capitalizeName(): string {
    return this.name.toLocaleUpperCase();
  }

  getHeroDescription() : string {
    return `${this.name} - ${this.age}`
  }

  changeName(name : string) : void {
    this.name = name;
  }

  changeAge(age : number) : void {
    this.age = age;
  }
  reset() {
    this.name = 'IronMan'
    this.age = 18
  }
}
