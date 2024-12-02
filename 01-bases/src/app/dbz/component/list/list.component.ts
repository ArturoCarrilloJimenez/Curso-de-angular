import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Characters } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list-person',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Output()
  characterSelect: EventEmitter<string> = new EventEmitter();

  @Input()
  public charactersList: Characters[] = [];

  deleteCharacter(id : string) {
    this.characterSelect.emit(id)
  }
}
