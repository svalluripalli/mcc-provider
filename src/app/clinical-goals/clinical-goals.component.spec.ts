import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicalGoalsComponent } from './clinical-goals.component';

describe('ClinicalGoalsComponent', () => {
  let component: ClinicalGoalsComponent;
  let fixture: ComponentFixture<ClinicalGoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicalGoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicalGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
