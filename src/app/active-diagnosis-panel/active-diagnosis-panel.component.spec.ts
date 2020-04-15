import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveDiagnosisPanelComponent } from './active-diagnosis-panel.component';

describe('ActiveDiagnosisPanelComponent', () => {
  let component: ActiveDiagnosisPanelComponent;
  let fixture: ComponentFixture<ActiveDiagnosisPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveDiagnosisPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveDiagnosisPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
