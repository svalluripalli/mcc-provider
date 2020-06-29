import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationPanelComponent } from './medication-panel.component';

describe('MedicationPanelComponent', () => {
  let component: MedicationPanelComponent;
  let fixture: ComponentFixture<MedicationPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicationPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
