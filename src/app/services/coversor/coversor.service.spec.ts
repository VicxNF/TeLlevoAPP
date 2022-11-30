import { TestBed } from '@angular/core/testing';

import { CoversorService } from './coversor.service';

describe('CoversorService', () => {
  let service: CoversorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoversorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
