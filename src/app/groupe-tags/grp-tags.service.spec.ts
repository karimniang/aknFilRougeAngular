import { TestBed } from '@angular/core/testing';

import { GrpTagsService } from './grp-tags.service';

describe('GrpTagsService', () => {
  let service: GrpTagsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrpTagsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
