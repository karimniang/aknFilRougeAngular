import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ProfilSortiesService } from '../profil-sorties.service'

@Component({
  selector: 'app-liste-profil-sortie',
  templateUrl: './liste-profil-sortie.component.html',
  styleUrls: ['./liste-profil-sortie.component.scss']
})
export class ListeProfilSortieComponent implements OnInit {

  profils:any=[];
  pageSize = 5;
  page=1;

  profilSortie;
  constructor(private plStService:ProfilSortiesService) { }

  ngOnInit(): void {
    this.plStService.getProfilSorties().subscribe(
      (resp)=>{
        this.profilSortie =resp['hydra:member'];
      }
    );
  }

  removePlSortie(id){
    Swal.fire(
      {
        title: 'Are you sure to delete this profil?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }
    ).then(
      (result)=>{
        if (result.isConfirmed) {
          return this.plStService.removeProfilSortie(id);
        }
      }
    );
  }

}
