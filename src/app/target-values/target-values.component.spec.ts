import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetValuesComponent } from './target-values.component';

describe('TargetValuesComponent', () => {
  let component: TargetValuesComponent;
  let fixture: ComponentFixture<TargetValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
