import { TestBed } from '@angular/core/testing';

import { UtilisateurResolverService } from './utilisateur-resolver.service';

describe('UtilisateurResolverService', () => {
  let service: UtilisateurResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilisateurResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
