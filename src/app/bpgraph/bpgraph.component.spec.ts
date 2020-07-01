import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BPGraphComponent } from './bpgraph.component';

describe('BPGraphComponent', () => {
  let component: BPGraphComponent;
  let fixture: ComponentFixture<BPGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BPGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BPGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
