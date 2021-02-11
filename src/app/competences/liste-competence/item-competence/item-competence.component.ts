import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import Swal from 'sweetalert2';
import { Competence } from '../../competence.model';
import { CompetenceService } from '../../competence.service';
import { Niveau } from '../../niveau.model';

@Component({
  selector: 'app-item-competence',
  templateUrl: './item-competence.component.html',
  styleUrls: ['./item-competence.component.scss']
})
export class ItemCompetenceComponent implements OnInit {

  //id: number;
  competence: Competence;
  niveau1: Niveau;
  niveau2: Niveau;
  niveau3: Niveau;

  constructor(private comptService: CompetenceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params)=> {
        //console.log("param/chan");
        const id = +params['id'];
        //console.log(id);

        this.comptService.getCompetenceById(id).subscribe(
          (res)=>{
            this.competence = res;
            this.niveau1= this.competence.niveaux[0];
            this.niveau2= this.competence.niveaux[1];
            this.niveau3= this.competence.niveaux[2];
            //console.log(this.competence.niveaux);
            //console.log(this.competence.niveaux[0].GroupeAction);
            //console.log(this.competence);
            
          }
        );
      }
    )
  }


  removeCompetence(id){
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
          return this.comptService.removeOneCompetence(id);
        }
      }
    );
  }


}
