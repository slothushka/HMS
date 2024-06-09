import { TestBed } from '@angular/core/testing';

import { UpdatepresService } from './updatepres.service';

describe('UpdatepresService', () => {
  let service: UpdatepresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatepresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
