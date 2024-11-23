import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'sheared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css',
})
export class SearchBoxComponent {
  @ViewChild('inputText')
  term!: ElementRef<HTMLInputElement>;

  @Input() public placeholder: string = ''

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter()

  emitValue (): void {
    this.onValue.emit(this.term.nativeElement.value)
  }
}
