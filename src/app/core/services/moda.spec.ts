import { TestBed } from '@angular/core/testing';

import { Moda } from './moda';

describe('Moda', () => {
  let service: Moda;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Moda);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
