import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { UtilisateursService } from '../utilisateurs.service';

@Component({
  selector: 'app-liste-utilisateur',
  templateUrl: './liste-utilisateur.component.html',
  styleUrls: ['./liste-utilisateur.component.scss']
})
export class ListeUtilisateurComponent implements OnInit {

  users:any[] = [];
  pageSize = 5;
  page=1;
  userConnected
  constructor(private userService:UtilisateursService) { }

  ngOnInit(): void {
    this.userService.getAllUser().subscribe(
      (reslut:{})=>{
       this.users = reslut["hydra:member"];
       //console.log(this.users);
       
      }
    );

    this.userService.getUserConnected().subscribe(
      (resp) => {
        this.userConnected = resp;
      }
    );
  }

  removeUser(id){
    //console.log(id);
    Swal.fire(
      {
        title: 'Are you sure to delete this user?',
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
          return this.userService.removeUtilisateur(id);
        }
      }
    );
  }

  
}
