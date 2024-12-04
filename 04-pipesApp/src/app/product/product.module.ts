import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumberPageComponent } from './pages/number-page/number-page.component';
import { UncomonPageComponent } from './pages/uncomon-page/uncomon-page.component';



@NgModule({
  declarations: [
    BasicsPageComponent,
    NumberPageComponent,
    UncomonPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
