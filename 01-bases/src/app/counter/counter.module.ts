import { CounterComponent } from "./component/counter/counter.component";
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [
    CounterComponent
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterModule{}
