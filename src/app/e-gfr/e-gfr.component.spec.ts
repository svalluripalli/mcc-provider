import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EGFRComponent } from './e-gfr.component';

describe('EGFRComponent', () => {
  let component: EGFRComponent;
  let fixture: ComponentFixture<EGFRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EGFRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EGFRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
