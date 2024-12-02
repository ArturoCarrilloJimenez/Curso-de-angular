import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LazyImage } from './components/lezyImage/lezyImage.component';



@NgModule({
  declarations: [
    SidebarComponent,
    LazyImage
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    LazyImage
  ]
})
export class SharedModule { }
