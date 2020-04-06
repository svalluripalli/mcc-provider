import { TestBed } from '@angular/core/testing';

import { CareplanServiceService } from './careplan-service.service';

describe('CareplanServiceService', () => {
  let service: CareplanServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CareplanServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
