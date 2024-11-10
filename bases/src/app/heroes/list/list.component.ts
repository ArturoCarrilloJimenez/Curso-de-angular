import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public listHero: string[] = ['Hero1', 'Hero2', 'Hero3'];
  public deleteHero :  string | undefined = undefined

  deleteLastHero() : void {
    this.deleteHero = this.listHero.pop()
  }
}
