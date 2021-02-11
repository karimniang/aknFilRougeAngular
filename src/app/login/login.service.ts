import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private decodedToken;
  public localStorage = window.localStorage;

  constructor(private hhtpClient: HttpClient, private router: Router) { }

  saveToken(username, password) {  
    this.hhtpClient.post("http://127.0.0.1:8000/api/login_check", { username, password }).subscribe(
      token => {
        localStorage.clear();
        //this.localStorage.clear();
        localStorage.setItem('token', token['token']);
        //console.log(localStorage.getItem('token'));
        //this.errorMess ="";
        return this.decodedToken
      },
      httpError => {
        return httpError.error.message;
      }
    );
  }

  decodeToken() {
    return this.localStorage.getItem('token') ? jwt_decode(this.localStorage.getItem('token')) : null;
  }
  getToken(): string {
    return this.localStorage.getItem('token');
  }

  redirectByRole(role: string) {
    switch (role) {
      case 'ROLE_ADMIN': {
        this.router.navigate(['/accueil/']).then(() => {
          window.location.reload();
        });;
        //localStorage.clear();
        break;
      }
      default: {
        this.router.navigate(['login']);
        break;
      }
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']).then(()=>{
      window.location.reload();
    });
  }

  public loggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }


  public getTokenExpirationDate(token): Date {
    const decoded = jwt_decode(token);

    if (decoded['exp'] === undefined) return null;

    const date = new Date(0); 
    date.setUTCSeconds(decoded['exp']);
    return date;
  }

  public isTokenExpired(token?: string): boolean {
    if(!token) token = this.getToken();
    if(!token) return true;

    const date = this.getTokenExpirationDate(token);
    if(date === undefined) return false;
    return !(date.valueOf() > new Date().valueOf());
  }
}
