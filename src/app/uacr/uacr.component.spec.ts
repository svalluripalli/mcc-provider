import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UACRComponent } from './uacr.component';

describe('UACRComponent', () => {
  let component: UACRComponent;
  let fixture: ComponentFixture<UACRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UACRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UACRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
