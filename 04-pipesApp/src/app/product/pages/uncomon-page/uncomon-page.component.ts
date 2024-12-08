import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-uncomon-page',
  templateUrl: './uncomon-page.component.html',
  styleUrl: './uncomon-page.component.scss',
})
export class UncomonPageComponent {
  // i18n Select
  name: string = 'Arturo';
  gender: 'mole' | 'female' = 'mole';
  invitationMap = {
    mole: 'invitarlo',
    female: 'invitarla',
  };

  changeClient() {
    this.name = 'Luisa';
    this.gender = 'female';
  }

  // i18n Plural
  clientes: string[] = ['pepe', 'maria', 'luisa'];

  clientesMap = {
    '=0': 'no hay clientes',
    '=1': 'tenemos un cliente',
    other: 'tenemos varios clientes',
  };

  deleteClient() {
    this.clientes.shift();
  }

  // KeyValue Pipe
  person = {
    name: 'Arturo',
    age: 30,
  };

  // Async Pipe
  nyObservableTimer = interval(1000);

  promiseValue: Promise<string> = new Promise((resource, reject) => {
    setTimeout(() => {
      resource('Tenemos datos en la promesa');
    }, 2000);
  });
}
