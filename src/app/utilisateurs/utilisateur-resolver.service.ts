import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ListeUtilisateurComponent } from './liste-utilisateur/liste-utilisateur.component';
import { UtilisateursService } from './utilisateurs.service';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurResolverService {

  constructor(private userService: UtilisateursService) { }

  resolve(route: ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<any>|Promise<any>|any{
    return this.userService.getOneUser(+route.params['id']);
    // return this.listeUser.users.find(
    //   (user)=>{
    //     return user.id === route.params['id'];
    //   }
    // )
  }
}
