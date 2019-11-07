import { TestBed } from '@angular/core/testing';

import { CohortsService } from './cohorts.service';

describe('CohortService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CohortsService = TestBed.get(CohortsService);
    expect(service).toBeTruthy();
  });
});
