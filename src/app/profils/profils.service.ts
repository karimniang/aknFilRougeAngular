import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class ProfilsService {

  constructor(private loginService:LoginService,private httpclient:HttpClient, private router: Router) { }
  urlApi = "http://127.0.0.1:8000/api/admin/";  // URL de l'API

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer '+ this.loginService.getToken()
    })
  };

  getProfils(): Observable<any> {
    return this.httpclient.get<any>(this.urlApi+"user_profils?deleted=false", this.httpOptions);
  }

  getOneProfil(id): Observable<any> {
    return this.httpclient.get<any>(this.urlApi+"user_profils/"+id, this.httpOptions);
  }

  addProfil(libelle) {
    return this.httpclient.post(this.urlApi+"user_profils",{libelle},this.httpOptions).subscribe(
      result=> {
        console.log(result['libelle'])
         if (result['libelle'] != "") {
           Swal.fire(
             'Profil added!',
             'Click to access the list of Profils!',
             'success'
           )
           this.router.navigate(['accueil/profil/liste']);
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

  updateProfil(id,libelle) {
    //return this.urlApi+"user_profils/"+id;
    return this.httpclient.put(this.urlApi+"user_profils/"+id,{id,libelle},this.httpOptions).subscribe(
      result=> {
        console.log(result['libelle'])
         if (result['libelle'] != "") {
           Swal.fire(
             'Profil updated!',
             'Click to access the list of Profils!',
             'success'
           )
           this.router.navigate(['accueil/profil/liste']);
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

  removeProfil(id) {
    return this.httpclient.delete(this.urlApi+"user_profils/"+id,this.httpOptions).subscribe(
      response =>{
        Swal.fire(
          'Profil deleted with success!',
          'Click to access the list of Profils!',
          'success'
        )
        return this.router.navigate(['/accueil/profil/liste']);
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
