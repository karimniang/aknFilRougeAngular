import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { Competence } from './competence.model';
import { CompetenceService } from './competence.service';

@Injectable({
  providedIn: 'root'
})
export class CompetenceResolverService {
  toreturn;
  constructor(private comptService: CompetenceService, private router:Router) { }

  resolve(route: ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<Competence>|Promise<Competence>|Competence{
  
    //console.log(this.comptService.getCompetenceById(+route.params['id']));
    
    
    this.comptService.getCompetenceById(+route.params['id']).subscribe(
      (res)=>{
        this.toreturn = res;
        //return this.toreturn
      },
      (err)=>{
        this.router.navigate(["/accueil/not-found"]);
        return EMPTY;
      }
    );

    return this.comptService.getCompetenceById(+route.params['id']);

    
    //?this.comptService.getCompetenceById(+route.params['id']):this.router.navigate[('not-found')];
  }
}
