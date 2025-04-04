import { Component, Input } from '@angular/core';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css',
})
export class CardListComponent {
  @Input() public title: string = '';
  @Input() public imageURL: string = '';
  @Input() public textAlter: string = '';
}
