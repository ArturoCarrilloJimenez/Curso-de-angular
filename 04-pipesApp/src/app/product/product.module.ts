import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimengModule } from '../primeng/primeng.module';

import { NumberPageComponent } from './pages/number-page/number-page.component';
import { UncomonPageComponent } from './pages/uncomon-page/uncomon-page.component';
import { BasicPageComponent } from './pages/basic-page/basic-page.component';



@NgModule({
  declarations: [
    BasicPageComponent,
    NumberPageComponent,
    UncomonPageComponent,
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],

})
export class ProductModule { }
