import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { GrpCompetenceService } from './grp-competence.service';
import { GroupeCompetence } from './grp_compt.model';

@Injectable({
  providedIn: 'root'
})
export class GrpCompetencesResolverService {

  constructor(private grpCompServices:GrpCompetenceService) { }

  resolve(route: ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<GroupeCompetence>|Promise<GroupeCompetence>|GroupeCompetence{
    return this.grpCompServices.getOneGroupeCOmpetences(+route.params['id']);
  }
}
