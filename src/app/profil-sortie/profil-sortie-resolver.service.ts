import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ProfilSortiesService } from './profil-sorties.service';

@Injectable({
  providedIn: 'root'
})
export class ProfilSortieResolverService {

  constructor(private profilStService: ProfilSortiesService) { }

  resolve(route: ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<any>|Promise<any>|any{
    return this.profilStService.getOneProfilSortie(+route.params['id']);
  }
}
