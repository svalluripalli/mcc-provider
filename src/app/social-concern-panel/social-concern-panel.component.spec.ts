import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SocialConcernPanelComponent} from './social-concern-panel.component';

describe('SocialConcernPanelComponent', () => {
  let component: SocialConcernPanelComponent;
  let fixture: ComponentFixture<SocialConcernPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SocialConcernPanelComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialConcernPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
