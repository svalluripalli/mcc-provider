import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientChoicesComponent } from './patient-choices.component';

describe('PatientChoicesComponent', () => {
  let component: PatientChoicesComponent;
  let fixture: ComponentFixture<PatientChoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientChoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientChoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
