import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicalTestResultsComponent } from './clinical-test-results.component';

describe('ClinicalTestResultsComponent', () => {
  let component: ClinicalTestResultsComponent;
  let fixture: ComponentFixture<ClinicalTestResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicalTestResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicalTestResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
