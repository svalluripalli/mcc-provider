import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemographicsPanelComponent } from './demographics-panel.component';

describe('DemographicsPanelComponent', () => {
  let component: DemographicsPanelComponent;
  let fixture: ComponentFixture<DemographicsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemographicsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemographicsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
