import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interface';

@Injectable({ providedIn: 'root' })
export class GifsServices {
  public gifsList: Gif[] = [];

  private _tagsHistory: string[] = [];
  private apiKey: string = 'GPuJPEsIP1bGeSBf8sTYJRWb1U1Xyr4Z';
  private URL: string = 'http://api.giphy.com/v1/gifs/search';

  constructor(private http: HttpClient) {
    this.getLocalStorage()
  }

  get tagHistory(): string[] {
    return this._tagsHistory;
  }

  private organizeTags(tag: string) {
    tag.toLocaleLowerCase;

    if (this._tagsHistory.includes(tag))
      this._tagsHistory = this._tagsHistory.filter(
        (element) => element !== tag
      );

    if (this._tagsHistory.length >= 10) this._tagsHistory.splice(9);

    this._tagsHistory.unshift(tag);
    this.saveLocalStorage()
  }

  private saveLocalStorage() {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory))
  }

  private getLocalStorage() {
    if (!localStorage.getItem('history')) return

    this._tagsHistory = JSON.parse(localStorage.getItem('history')!)

    if (this._tagsHistory) this.searchTag(this._tagsHistory[0])
  }

  searchTag(tag: string) {
    if (tag === '') return;
    this.organizeTags(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', tag)
      .set('limit', 12);

    this.http.get<SearchResponse>(this.URL, { params }).subscribe((resp) => {
      this.gifsList = resp.data;
    });
  }
}
