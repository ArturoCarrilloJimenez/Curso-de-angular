import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NumberPageComponent } from './pages/number-page/number-page.component';
import { UncomonPageComponent } from './pages/uncomon-page/uncomon-page.component';
import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { CustomPageComponent } from './pages/custom-page/custom-page.component';

const routes: Routes = [
  { path: '', component: BasicPageComponent },
  { path: 'number', component: NumberPageComponent },
  { path: 'uncommon', component: UncomonPageComponent },
  { path: 'custom', component: CustomPageComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
