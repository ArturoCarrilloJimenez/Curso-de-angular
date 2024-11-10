import { Component } from "@angular/core";

@Component({
  selector: "app-counter",
  template: `<p>Contador {{ count }}</p>

  <button (click)="incrementBy(1)">+1</button>
  <button (click)="reset()">reset</button>
  <button (click)="incrementBy(-1)">-1</button>`
})
export class CounterComponent {
  public defaultCount : number = 0
  public count: number = this.defaultCount;

  incrementBy(value: number) : void {
    this.count += value;
  }
  reset() {
  this.count = this.defaultCount;
  }
}
