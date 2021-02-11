import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ProfilSortiesService } from '../profil-sorties.service';

@Component({
  selector: 'app-add-profil-sortie',
  templateUrl: './add-profil-sortie.component.html',
  styleUrls: ['./add-profil-sortie.component.scss']
})
export class AddProfilSortieComponent implements OnInit {

  libelle='';
  submit= false;
  profilSortie;
  id;
  constructor(private router:Router,private route:ActivatedRoute, private profilStService:ProfilSortiesService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.route.data.subscribe(
        (data:Data)=>{
          this.profilSortie = data['profilSortie'];
          this.libelle = this.profilSortie.libelle;
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
      this.profilStService.addProfilSortie(this.libelle);
    }else {
      this.profilStService.updateProfilSortie(this.id,this.libelle);
    }
  }
}
