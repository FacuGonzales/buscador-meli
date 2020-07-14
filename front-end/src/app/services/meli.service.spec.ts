import { TestBed } from '@angular/core/testing';

import { MeliService } from './meli.service';

describe('MeliService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MeliService = TestBed.get(MeliService);
    expect(service).toBeTruthy();
  });
});
