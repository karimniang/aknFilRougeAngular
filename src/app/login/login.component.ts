import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  usernameIsvalide : boolean;
  passwordIsvalide : boolean;
  isIn: boolean = true;
  token;

  constructor(private router:Router, private logService:LoginService) { }

  ngOnInit(): void {
   
  }

  onSubmitLog(){
    //console.log(this.username + this.password);
    
    this.usernameIsvalide = true;
    this.passwordIsvalide = true;
    if (!this.username) {
      return this.usernameIsvalide = false;
    }
    if (!this.password) {
      return this.passwordIsvalide = false;
    }
    this.logService.saveToken(this.username,this.password);
  
    this.token = this.logService.decodeToken();
    if (!this.token) {
      this.isIn = false;
    }
    console.log(this.token.roles);
    this.logService.redirectByRole(this.token.roles[0]);
    
    

    
    //console.log(this.username+this.password);

    

    // this.router.navigate(['/accueil/user/liste']).then(() => {
    //   window.location.reload();
    // });
  }
}
