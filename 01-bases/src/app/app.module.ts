import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { CounterModule } from './counter/counter.module';
import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';

// Configuración del local
import localeEsES from '@angular/common/locales/es';
import localeFrCA from '@angular/common/locales/fr-CA';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEsES);
registerLocaleData(localeFrCA);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroesModule,
    DbzModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-ES' }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
