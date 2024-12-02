import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gifs-list-gifs',
  templateUrl: './list-gifs.component.html',
  styleUrl: './list-gifs.component.css'
})
export class ListGifsComponent {
  @Input()
  public gifsList: Gif[] = [];
}
