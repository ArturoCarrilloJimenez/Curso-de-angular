import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sheared-lazy-image',
  templateUrl: 'lazyImage.component.html',
})
export class LazyImage implements OnInit {
  constructor() {}

  @Input() public url!: string;
  @Input() public alterText!: string;

  ngOnInit(): void {
    if (!this.url) throw new Error('URL property is required')
  }

  protected hasLoads: boolean = false

  onLoad () {
    this.hasLoads = true
  }
}

