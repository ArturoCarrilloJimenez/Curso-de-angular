import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwichesPageComponent } from './swiches-page.component';

describe('SwichesPageComponent', () => {
  let component: SwichesPageComponent;
  let fixture: ComponentFixture<SwichesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwichesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwichesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
