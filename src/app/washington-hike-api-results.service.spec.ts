import { TestBed, inject } from '@angular/core/testing';

import { WashingtonHikeApiResultsService } from './washington-hike-api-results.service';

describe('WashingtonHikeApiResultsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WashingtonHikeApiResultsService]
    });
  });

  it('should ...', inject([WashingtonHikeApiResultsService], (service: WashingtonHikeApiResultsService) => {
    expect(service).toBeTruthy();
  }));
});
