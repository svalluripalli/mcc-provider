import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosisPanelComponent } from './diagnosis-panel.component';

describe('DiagnosisPanelComponent', () => {
  let component: DiagnosisPanelComponent;
  let fixture: ComponentFixture<DiagnosisPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosisPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosisPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
