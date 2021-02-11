import { Component, OnInit } from '@angular/core';
import { GrpCompetenceService } from '../grp-competence.service'
import { GroupeCompetence } from '../grp_compt.model';

@Component({
  selector: 'app-liste-grp-competence',
  templateUrl: './liste-grp-competence.component.html',
  styleUrls: ['./liste-grp-competence.component.scss']
})
export class ListeGrpCompetenceComponent implements OnInit {

  groupeCompetences: GroupeCompetence[];
  pageSize = 5;
  page=1;
  constructor(private groupeService: GrpCompetenceService) { }

  ngOnInit(): void {
    this.groupeService.getAllGroupe().subscribe(
      (res)=>{
        this.groupeCompetences = res['hydra:member'];
      }
    );
  }
  

}
