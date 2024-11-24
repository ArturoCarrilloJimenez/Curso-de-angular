import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingSpenerComponent } from './loading-spener.component';

describe('LoadingSpenerComponent', () => {
  let component: LoadingSpenerComponent;
  let fixture: ComponentFixture<LoadingSpenerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadingSpenerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingSpenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
