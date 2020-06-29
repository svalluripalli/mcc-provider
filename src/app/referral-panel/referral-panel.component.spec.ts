import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralPanelComponent } from './referral-panel.component';

describe('ReferralPanelComponent', () => {
  let component: ReferralPanelComponent;
  let fixture: ComponentFixture<ReferralPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferralPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
