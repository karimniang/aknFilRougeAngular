import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ReferentielService } from './referentiel.service';

@Injectable({
  providedIn: 'root'
})
export class ReferentielResolverService {

  constructor(private refService: ReferentielService) { }

  resolve(route: ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<any>|Promise<any>|any{
    return this.refService.getOneReferentiel(+route.params['id']);
  }
}
