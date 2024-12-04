import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumberPageComponent } from './pages/number-page/number-page.component';
import { UncomonPageComponent } from './pages/uncomon-page/uncomon-page.component';

const routes: Routes = [
  { path: '', component: BasicsPageComponent },
  { path: 'number', component: NumberPageComponent },
  { path: 'uncommon', component: UncomonPageComponent },
  { path: '**', redirectTo: '' },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule { }

