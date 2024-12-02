import { Component, EventEmitter, Output } from '@angular/core';
import { GifsServices } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  @Output()
  emitter: EventEmitter<string> = new EventEmitter();

  constructor(private gifsService: GifsServices) {}

  public get tags(): string[] {
    return this.gifsService.tagHistory;
  }

  searchGifs(tag: string) {
    this.emitter.emit(tag);
    this.gifsService.searchTag(tag)
  }
}
