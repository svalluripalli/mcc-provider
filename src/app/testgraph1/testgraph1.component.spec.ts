import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testgraph1Component } from './testgraph1.component';

describe('Testgraph1Component', () => {
  let component: Testgraph1Component;
  let fixture: ComponentFixture<Testgraph1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testgraph1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testgraph1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
