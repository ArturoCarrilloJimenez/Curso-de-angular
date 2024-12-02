import { Component, EventEmitter, Output } from '@angular/core';
import { Characters } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-person',
  templateUrl: './add-person.component.html',
  styleUrl: './add-person.component.css',
})
export class AddPersonComponent {

  @Output()
  onNewEmitted : EventEmitter<Characters>  = new EventEmitter()

  public character: Characters = {
    id: '',
    name: '',
    pawer: 0,
  };

  addCharter() {
    if (this.character.name.length === 0) return

    this.onNewEmitted.emit({...this.character})

    this.character.name = '';
    this.character.pawer = 0;
  }
}
