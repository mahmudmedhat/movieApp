import { TestBed } from '@angular/core/testing';

import { WatchListService } from './watch-list-service';

describe('WatchListService', () => {
  let service: WatchListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WatchListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
