import { TestBed } from '@angular/core/testing';

import { SuperheroDataService } from './superhero-data.service';

describe('SuperheroDataService', () => {
  let service: SuperheroDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperheroDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
