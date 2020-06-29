import { TestBed } from '@angular/core/testing';

import { SocialConcernService } from './social-concern.service';

describe('SocialConcernService', () => {
  let service: SocialConcernService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocialConcernService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
