import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UtilisateursService } from 'src/app/utilisateurs/utilisateurs.service';

@Injectable({
  providedIn: 'root'
})
export class AccueilResolverService {

  constructor(private userService: UtilisateursService) { }

  resolve(route: ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<any>|Promise<any>|any{
    return this.userService.getUserConnected();
    // return this.listeUser.users.find(
    //   (user)=>{
    //     return user.id === route.params['id'];
    //   }
    // )
  }
}
