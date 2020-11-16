import { TestBed } from '@angular/core/testing';

import { IntercetorService } from './intercetor.service';

describe('IntercetorService', () => {
  let service: IntercetorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntercetorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
