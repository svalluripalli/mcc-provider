import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolidatedGoalsComponent } from './consolidated-goals.component';

describe('consolidatedGoalsComponent', () => {
  let component: ConsolidatedGoalsComponent;
  let fixture: ComponentFixture<ConsolidatedGoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsolidatedGoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsolidatedGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
