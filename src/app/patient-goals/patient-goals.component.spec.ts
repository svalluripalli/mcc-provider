import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientGoalsComponent } from './patient-goals.component';

describe('PatientGoalsComponent', () => {
  let component: PatientGoalsComponent;
  let fixture: ComponentFixture<PatientGoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientGoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
