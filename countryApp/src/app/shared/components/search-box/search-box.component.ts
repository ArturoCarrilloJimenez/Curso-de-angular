import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'sheared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css',
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  private debouncerSubscriptions?: Subscription;
  private debouncer = new Subject<string>();

  @Input() public placeholder: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncerSubscriptions = this.debouncer.pipe(debounceTime(300)).subscribe((value) => {
      this.onValue.emit(value);
    });
  }

  ngOnDestroy(): void {
    this.debouncerSubscriptions?.unsubscribe()
  }

  onKeyPress(searchTem: string) {
    this.debouncer.next(searchTem);
  }
}
