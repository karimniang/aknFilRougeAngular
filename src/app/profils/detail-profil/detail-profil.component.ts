import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import Swal from 'sweetalert2';
import { ProfilsService } from '../profils.service';

@Component({
  selector: 'app-detail-profil',
  templateUrl: './detail-profil.component.html',
  styleUrls: ['./detail-profil.component.scss']
})
export class DetailProfilComponent implements OnInit {

  profil;
  constructor(private route:ActivatedRoute, private profilService: ProfilsService) { }

  ngOnInit(): void {
    this.route.data.subscribe(
      (data:Data)=>{
        this.profil= data['profil'];
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
          return this.profilService.removeProfil(id);
        }
      }
    );
  }

}
