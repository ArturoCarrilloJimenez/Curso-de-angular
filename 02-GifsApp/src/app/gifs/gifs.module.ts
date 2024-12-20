import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { ListGifsComponent } from './components/list-gifs/list-gifs.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { SharedModule } from "../shared/shared.module";



@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    ListGifsComponent,
    CardListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
],
  exports: [
    HomePageComponent
  ]
})
export class GifsModule { }
