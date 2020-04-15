import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InactiveDiagnosisPanelComponent } from './inactive-diagnosis-panel.component';

describe('InactiveDiagnosisPanelComponent', () => {
  let component: InactiveDiagnosisPanelComponent;
  let fixture: ComponentFixture<InactiveDiagnosisPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InactiveDiagnosisPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InactiveDiagnosisPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
