import { TestBed } from '@angular/core/testing';

import { BookaptService } from './bookapt.service';

describe('BookaptService', () => {
  let service: BookaptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookaptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
