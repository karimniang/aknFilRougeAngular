import { TestBed } from '@angular/core/testing';

import { ProfilSortiesService } from './profil-sorties.service';

describe('ProfilSortiesService', () => {
  let service: ProfilSortiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfilSortiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
