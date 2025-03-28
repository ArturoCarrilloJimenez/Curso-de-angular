import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimengModule } from '../primeng/primeng.module';

import { NumberPageComponent } from './pages/number-page/number-page.component';
import { UncomonPageComponent } from './pages/uncomon-page/uncomon-page.component';
import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { CustomPageComponent } from './pages/custom-page/custom-page.component';
import { ToggleCasePipe } from './pipes/taggle-case.pipe';
import { CanFlayPipe } from './pipes/canFlay.pipe';
import { HeroColorPipe } from './pipes/heroColor.pipe';
import { HeroTextColorPipe } from './pipes/heroTextColor.pipe';
import { CreatorHeroPipe } from './pipes/creatorHero.pipe';
import { HeroShotByPipe } from './pipes/hero-shot-by.pipe';
import { FormsModule } from '@angular/forms';
import { FilterHeroPipe } from './pipes/filter-hero.pipe';

@NgModule({
  declarations: [
    BasicPageComponent,
    NumberPageComponent,
    UncomonPageComponent,
    CustomPageComponent,
    ToggleCasePipe,
    CanFlayPipe,
    HeroColorPipe,
    HeroTextColorPipe,
    CreatorHeroPipe,
    HeroShotByPipe,
    FilterHeroPipe,
  ],
  imports: [CommonModule, PrimengModule, FormsModule],
})
export class ProductModule {}
