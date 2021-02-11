import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ProfilsService } from './profils.service';

@Injectable({
  providedIn: 'root'
})
export class ProfilResolverService implements Resolve<any> {

  constructor(private profilService: ProfilsService) { }

  resolve(route: ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<any>|Promise<any>|any{
    return this.profilService.getOneProfil(+route.params['id']);
  }
}
