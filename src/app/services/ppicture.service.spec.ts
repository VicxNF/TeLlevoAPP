import { TestBed } from '@angular/core/testing';

import { PpictureService } from './ppicture.service';

describe('PpictureService', () => {
  let service: PpictureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PpictureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
