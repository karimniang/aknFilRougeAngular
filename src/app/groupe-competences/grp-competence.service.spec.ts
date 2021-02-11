import { TestBed } from '@angular/core/testing';

import { GrpCompetenceService } from './grp-competence.service';

describe('GrpCompetenceService', () => {
  let service: GrpCompetenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrpCompetenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
