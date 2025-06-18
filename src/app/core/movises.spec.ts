import { TestBed } from '@angular/core/testing';

import { Movises } from './movises';

describe('Movises', () => {
  let service: Movises;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Movises);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
