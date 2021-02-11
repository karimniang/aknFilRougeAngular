import { TestBed } from '@angular/core/testing';

import { ReferentielResolverService } from './referentiel-resolver.service';

describe('ReferentielResolverService', () => {
  let service: ReferentielResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReferentielResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
