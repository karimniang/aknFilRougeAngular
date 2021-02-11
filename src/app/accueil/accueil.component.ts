import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { UtilisateursService } from '../utilisateurs/utilisateurs.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  isNavOpened = false;
  userConnected;
  menuClicked = "user";

  constructor(private logService: LoginService, private route: ActivatedRoute, private userService: UtilisateursService, private router: Router) {

  }
  ngOnInit(): void {
    console.log(this.logService.isTokenExpired());
    if (this.logService.isTokenExpired()) {
      return this.logService.logout();
    }
    

    this.userService.getUserConnected().subscribe(
      (resp) => {
        this.userConnected = resp;
      }
    );
    // this.route.data.subscribe(
    //   (resp:Data)=>{
    //     this.userConnected = resp['userConnected'];
    //   }
    // )
    //console.log(this.logService.loggedIn());
    
    this.isConnected();
    // if (window.location.href.includes('login')) {
    //   this.login = false;
    //   //window.location.reload();
    // } 


  }

  userClick() {
    this.menuClicked = 'user';
    this.isNavOpened = true;
  }
  paramClick() {
    this.menuClicked = 'param';
    this.isNavOpened = true;
  }

  toggleNav() {
    this.isNavOpened = !this.isNavOpened;
  }

  toogle() {
    this.isNavOpened = false;
  }
  dcnClick() {
    return this.logService.logout();
  }

  //
  isConnected() {
    if (this.logService.loggedIn() == false ) {
      this.router.navigateByUrl('/login');
    }
  }

}
