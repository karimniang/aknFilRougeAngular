import { TestBed } from '@angular/core/testing';

import { CompetenceResolverService } from './competence-resolver.service';

describe('CompetenceResolverService', () => {
  let service: CompetenceResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompetenceResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
