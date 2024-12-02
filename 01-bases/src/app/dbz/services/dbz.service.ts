import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'

import { Characters } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DBZServices {
  public characters: Characters[] = [
    {
      id: uuid(),
      name: 'Goku',
      pawer: 9500,
    }, {
      id: uuid(),
      name: 'Vegeta',
      pawer: 10000,
    },{
      id: uuid(),
      name: 'Trunks',
      pawer: 6000
    }, {
      id: uuid(),
      name: 'Piccolo',
      pawer: 15
    }
  ];

  addCharter({id, ...character} : Characters) {
    const newCharacter : Characters = {id: uuid(), ...character}
    this.characters.push(newCharacter)
  }

  deleteCharterByID(id: string) {
    this.characters = this.characters.filter( character => character.id !== id)
  }
}
