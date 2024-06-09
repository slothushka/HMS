import { TestBed } from '@angular/core/testing';

import { BloodtestService } from './bloodtest.service';

describe('BloodtestService', () => {
  let service: BloodtestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloodtestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
