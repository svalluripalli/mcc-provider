import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthAndSocialConcernsComponent } from './health-and-social-concerns.component';

describe('HealthAndSocialConcernsComponent', () => {
  let component: HealthAndSocialConcernsComponent;
  let fixture: ComponentFixture<HealthAndSocialConcernsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthAndSocialConcernsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthAndSocialConcernsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
