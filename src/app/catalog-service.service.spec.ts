import { TestBed } from '@angular/core/testing';

import { CatalogServiceService } from './catalog-service.service';

describe('CatalogServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CatalogServiceService = TestBed.get(CatalogServiceService);
    expect(service).toBeTruthy();
  });
});
