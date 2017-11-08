import { TestBed, inject } from '@angular/core/testing';

import { CityToLatLonService } from './city-to-lat-lon.service';

describe('CityToLatLonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CityToLatLonService]
    });
  });

  it('should ...', inject([CityToLatLonService], (service: CityToLatLonService) => {
    expect(service).toBeTruthy();
  }));
});
