import { TestBed } from '@angular/core/testing';

import { GrpCompetencesResolverService } from './grp-competences-resolver.service';

describe('GrpCompetencesResolverService', () => {
  let service: GrpCompetencesResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrpCompetencesResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
