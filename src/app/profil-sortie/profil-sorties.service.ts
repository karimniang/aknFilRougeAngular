import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class ProfilSortiesService {

  constructor(private httpClient:HttpClient, private loginService:LoginService,private router:Router) { }
  urlApi = "http://127.0.0.1:8000/api/admin/";  // URL de l'API

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer '+ this.loginService.getToken()
    })
  };

  getProfilSorties(): Observable<any> {
    return this.httpClient.get<any>(this.urlApi+"profilsorties?deleted=false",this.httpOptions);
  }

  getOneProfilSortie(id): Observable<any> {
    return this.httpClient.get<any>(this.urlApi+"profilsorties/"+id, this.httpOptions);
  }

  addProfilSortie(libelle) {
    return this.httpClient.post(this.urlApi+"profilsorties",{libelle},this.httpOptions).subscribe(
      result=> {
        console.log(result['libelle'])
         if (result['libelle'] != "") {
           Swal.fire(
             'Profil added!',
             'Click to access the list of Profils!',
             'success'
           )
           this.router.navigate(['accueil/profil-sortie/liste']);
         }
      }, err => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.error['hydra:description']
        })
      }
    );
  }

  updateProfilSortie(id,libelle) {
    //return this.urlApi+"profilsorties/"+id;
    return this.httpClient.put(this.urlApi+"profilsorties/"+id,{id,libelle},this.httpOptions).subscribe(
      result=> {
        console.log(result['libelle'])
         if (result['libelle'] != "") {
           Swal.fire(
             'Profil updated!',
             'Click to access the list of Profils!',
             'success'
           )
           this.router.navigate(['accueil/profil-sortie/liste']);
         }
      }, err => {
        if (err.status === 400) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.error['hydra:description']
          })
        }
      }
    );
  }

  removeProfilSortie(id) {
    return this.httpClient.delete(this.urlApi+"profilsorties/"+id,this.httpOptions).subscribe(
      response =>{
        Swal.fire(
          'Profil deleted with success!',
          'Click to access the list of Profils!',
          'success'
        )
        return this.router.navigate(['/accueil/profil-sortie/liste']);
      },
      resa => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
        })
        return resa
      }
    );
  }
}
