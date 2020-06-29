import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationPanelComponent } from './education-panel.component';

describe('EducationPanelComponent', () => {
  let component: EducationPanelComponent;
  let fixture: ComponentFixture<EducationPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
