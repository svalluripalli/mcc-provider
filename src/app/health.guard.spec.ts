import { TestBed } from '@angular/core/testing';

import { HealthGuard } from './health.guard';

describe('HealthGuard', () => {
  let guard: HealthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HealthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
