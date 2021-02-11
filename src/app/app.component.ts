import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FilRougeAngular';
  // login = true;
  // isNavOpened = false;
  // menuClicked ="user";

  // constructor(private logService: LoginService, private router:Router) {
   
  // }
  // ngOnInit(){
    
  //   if (window.location.href.includes('login')) {
  //     this.login = false;
  //     //window.location.reload();
  //   } 
    
    
  // }

  // userClick(){
  //   this.menuClicked = 'user';
  //   this.isNavOpened = true;
  // }
  // paramClick(){
  //   this.menuClicked = 'param';
  //   this.isNavOpened = true;
  // }

  // toggleNav() {
  //   this.isNavOpened = !this.isNavOpened;
  // }

  // toogle(){
  //   this.isNavOpened = false;
  // }
  // dcnClick(){
  //   return this.logService.logout();
  // }

  // //this.isConnected();
  // // isConnected(){
  // //   if (this.logService.loggedIn() == false) {
  // //     this.router.navigateByUrl('/login');
  // //   }
  // // }
}
