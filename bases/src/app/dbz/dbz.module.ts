import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './component/list/list.component';
import { AddPersonComponent } from './component/add-person/add-person.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddPersonComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class DbzModule { }
