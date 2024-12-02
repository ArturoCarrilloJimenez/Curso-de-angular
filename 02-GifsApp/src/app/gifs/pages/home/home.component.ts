import { Component } from '@angular/core';
import { GifsServices } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interface';
@Component({
  selector: 'gift-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  constructor (private gifsServices : GifsServices) {}

  get gifsList() : Gif[] {
    return this.gifsServices.gifsList
  }

}
