import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsServices } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css',
})
export class SearchBoxComponent {
  @ViewChild('txtSearch')
  tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsServices: GifsServices) {}

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;

    this.gifsServices.searchTag(newTag);

    this.tagInput.nativeElement.value = '';
  }
}
