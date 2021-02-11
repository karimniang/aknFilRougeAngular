import { TestBed } from '@angular/core/testing';

import { PromotionAddedResolverService } from './promotion-added-resolver.service';

describe('PromotionAddedResolverService', () => {
  let service: PromotionAddedResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromotionAddedResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
