import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { GrpCompetenceService } from '../../grp-competence.service';
import { GroupeCompetence } from '../../grp_compt.model';

@Component({
  selector: 'app-item-grpe-competence',
  templateUrl: './item-grpe-competence.component.html',
  styleUrls: ['./item-grpe-competence.component.scss']
})
export class ItemGrpeCompetenceComponent implements OnInit {

  constructor(private gpcService:GrpCompetenceService) { }

  ngOnInit(): void {
    this.tooglePlus();
  }

  tooglePlus(){
    var coll = document.getElementsByClassName("panel-comp");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }
  }

  removeGrpCompetence(id){
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
          return this.gpcService.removeOneGroupeCompetence(id);
        }
      }
    );
  }

  @Input()
  grpComp: GroupeCompetence;
}
