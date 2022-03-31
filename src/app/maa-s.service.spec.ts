import { TestBed } from '@angular/core/testing';

import { MaaSService } from './maa-s.service';

describe('MaaSService', () => {
  let service: MaaSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaaSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
