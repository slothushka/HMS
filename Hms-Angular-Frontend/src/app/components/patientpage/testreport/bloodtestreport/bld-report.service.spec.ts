import { TestBed } from '@angular/core/testing';

import { BldReportService } from './bld-report.service';

describe('BldReportService', () => {
  let service: BldReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BldReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
