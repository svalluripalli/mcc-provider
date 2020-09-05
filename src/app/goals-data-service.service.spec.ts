import { TestBed } from '@angular/core/testing';

import { GoalsDataServiceService } from './goals-data-service.service';

describe('GoalsDataServiceService', () => {
  let service: GoalsDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoalsDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
