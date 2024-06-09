import { TestBed } from '@angular/core/testing';

import { PatResultserviceService } from './pat-resultservice.service';

describe('PatResultserviceService', () => {
  let service: PatResultserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatResultserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
