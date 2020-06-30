import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightOverTimeComponent } from './weight-over-time.component';

describe('WeightOverTimeComponent', () => {
  let component: WeightOverTimeComponent;
  let fixture: ComponentFixture<WeightOverTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeightOverTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightOverTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
