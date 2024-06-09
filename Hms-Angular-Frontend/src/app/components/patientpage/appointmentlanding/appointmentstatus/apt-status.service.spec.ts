import { TestBed } from '@angular/core/testing';

import { AptStatusService } from './apt-status.service';

describe('AptStatusService', () => {
  let service: AptStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AptStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
