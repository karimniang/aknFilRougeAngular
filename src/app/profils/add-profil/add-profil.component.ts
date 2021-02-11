import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ProfilsService } from '../profils.service';

@Component({
  selector: 'app-add-profil',
  templateUrl: './add-profil.component.html',
  styleUrls: ['./add-profil.component.scss']
})
export class AddProfilComponent implements OnInit {

  libelle='';
  submit= false;
  profil;
  id;
  constructor(private route: ActivatedRoute, private profilService:ProfilsService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.route.data.subscribe(
        (data:Data)=>{
          this.profil = data['profil'];
          this.libelle = this.profil.libelle;
        }
      )
    } 
  }

  onSubmitForm() {
    this.submit= true;
    if (this.libelle == '') {
      return;
    }
    this.id = this.route.snapshot.params['id'];
    if (!this.id) {
      this.profilService.addProfil(this.libelle);
    }else {
      this.profilService.updateProfil(this.id,this.libelle);
    }
    
    // Swal.fire(
    //   'Profil added',
    //   'Cliquer pour accéder a la liste des profils',
    //   'success'
    // ).then((result)=>{
    //   if (result.isConfirmed) {
    //     this.router.navigate(["/accueil/profil/liste"]);
    //   }
    // })
  }
}
