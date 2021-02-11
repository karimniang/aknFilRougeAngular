import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ProfilsService } from '../profils.service'

@Component({
  selector: 'app-liste-profil',
  templateUrl: './liste-profil.component.html',
  styleUrls: ['./liste-profil.component.scss']
})
export class ListeProfilComponent implements OnInit {

  profils:any=[];
  pageSize = 5;
  page=1;
  constructor(private profilsService:ProfilsService) { }

  ngOnInit(): void {
    // this.getAllProfils();
    this.getAllProfils();
  }

  public getAllProfils(){
    this.profilsService.getProfils().subscribe(
      (result:{})=>{
        this.profils = result["hydra:member"];
        //console.log(this.profils);
        
      }
    );
  }

  removeProfil(id){
    console.log(id);
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
          this.profilsService.removeProfil(id);
          this.getAllProfils();
        }
      }
    );
  }

}
