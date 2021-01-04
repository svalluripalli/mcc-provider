import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounselingPanelComponent } from './counseling-panel.component';

describe('CounselingPanelComponent', () => {
  let component: CounselingPanelComponent;
  let fixture: ComponentFixture<CounselingPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounselingPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounselingPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
