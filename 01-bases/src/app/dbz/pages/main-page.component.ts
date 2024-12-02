import { Component } from '@angular/core';
import { DBZServices } from '../services/dbz.service';
import { Characters } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html',
})
export class MainPageComponent {
  constructor(private dbzService: DBZServices) {}

  get listCharacters(): Characters[] {
    return this.dbzService.characters;
  }

  onDeleteCharacter(id : string) : void {
    this.dbzService.deleteCharterByID(id)
  }

  addCharacter(character : Characters) : void {
    this.dbzService.addCharter(character)
  }
}
