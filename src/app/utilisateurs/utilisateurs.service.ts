import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class UtilisateursService {


  urlApi = "http://127.0.0.1:8000/api/admin/";  // URL de l'API

  constructor(private loginService: LoginService, private httpclient: HttpClient, private router: Router) { }
  httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + this.loginService.getToken()
    })
  };

  addUser(profil, formdata) {
    return this.httpclient.post(this.urlApi + profil, formdata, this.httpOptions).subscribe(
      res => {
        console.log(res);
      },
      err => {
        //this.response = err.status
        console.log(err);

        if (err.status == 201) {
          Swal.fire(
            'User added!',
            'Click to access the list of users!',
            'success'
          )
          this.router.navigate(['/accueil/user/liste']);
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.error.message
          })
        }
      }
    );
  }

  UpdateUser(profil, id, formData) {

    //console.log(formData)
    // for (let [key, value] of formData) {
    //   console.log(`${key}: ${value}`)
    // }


    //console.log(formData)
    return this.httpclient.post(this.urlApi + profil + "/" + id, formData, this.httpOptions).subscribe(
      response => {
        //console.log(response)
        if (response['response'] === "Success Updating") {
          Swal.fire(
            'User updated!',
            'Click to access the list of users!',
            'success'
          )
          this.router.navigate(['/accueil/user/liste']);
        }

      }
      ,
      err => {
        //console.log(err);

        if (err['status'] === 200) {
          Swal.fire(
            'User updated!',
            'Click to access the list of users!',
            'success'
          ).then(
            (res) => {
              if (res.isConfirmed) {
                this.router.navigate(['/accueil/user/liste']);
              }
            }
          )
        } else {

          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.error['hydra:description']
          })
        }
      }

    );
  }

  getAllUser(): Observable<any> {
    return this.httpclient.get<any>(this.urlApi + "users?deleted=false", this.httpOptions);
  }

  getFormateurs(): Observable<any> {
    return this.httpclient.get<any>(this.urlApi + "formateurs", this.httpOptions);
  }

  getOneUser(id): Observable<any> {
    return this.httpclient.get<any>(this.urlApi + "users/" + id, this.httpOptions);
  }

  getUserConnected(): Observable<any> {
    return this.httpclient.get<any>(this.urlApi + "user/connected", this.httpOptions);
  }

  removeUtilisateur(id) {
    return this.httpclient.delete(this.urlApi + "users/" + id, this.httpOptions).subscribe(
      response => {
        Swal.fire(
          'Profil deleted with success!',
          'Click to access the list of Profils!',
          'success'
        )
        return this.router.navigate(['/accueil/user/liste']);
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
