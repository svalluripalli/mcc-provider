import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceAndInterventionsComponent } from './maintenance-and-interventions.component';

describe('MaintenanceAndInterventionsComponent', () => {
  let component: MaintenanceAndInterventionsComponent;
  let fixture: ComponentFixture<MaintenanceAndInterventionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceAndInterventionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceAndInterventionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
