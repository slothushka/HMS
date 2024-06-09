import { TestBed } from '@angular/core/testing';

import { SugReportService } from './sug-report.service';

describe('SugReportService', () => {
  let service: SugReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SugReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
