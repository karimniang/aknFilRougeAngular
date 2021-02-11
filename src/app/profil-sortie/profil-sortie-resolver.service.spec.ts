import { TestBed } from '@angular/core/testing';

import { ProfilSortieResolverService } from './profil-sortie-resolver.service';

describe('ProfilSortieResolverService', () => {
  let service: ProfilSortieResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfilSortieResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
