import { TestBed } from '@angular/core/testing';

import { HvcService } from './hvc.service';

describe('HvcService', () => {
  let service: HvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
