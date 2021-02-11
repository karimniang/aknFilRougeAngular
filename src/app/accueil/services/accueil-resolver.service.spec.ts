import { TestBed } from '@angular/core/testing';

import { AccueilResolverService } from './accueil-resolver.service';

describe('AccueilResolverService', () => {
  let service: AccueilResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccueilResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
