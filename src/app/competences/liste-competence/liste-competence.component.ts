import { Component, OnInit } from '@angular/core';
import { GroupeCompetence } from 'src/app/groupe-competences/grp_compt.model';
import { Competence } from '../competence.model'
import { CompetenceService } from '../competence.service'
import { GrpCompetenceService } from '../../groupe-competences/grp-competence.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-liste-competence',
  templateUrl: './liste-competence.component.html',
  styleUrls: ['./liste-competence.component.scss']
})
export class ListeCompetenceComponent implements OnInit {

  competences: Competence[];
  grpCompetences: GroupeCompetence[];
  groupeCpt: GroupeCompetence;
  id;
  constructor(private comptService: CompetenceService, private router:Router, private grpComptService:GrpCompetenceService) { }

  ngOnInit(): void {
    this.comptService.getAllCompetences().subscribe(
      (result:{})=>{
        this.grpCompetences = result["hydra:member"];
        //console.log(this.grpCompetences);
      }
    );
    
  }
  choiceGroupe(){
    //console.log(this.id);
    this.grpComptService.getOneGroupeCOmpetences(this.id).subscribe(
      (result)=>{
        this.groupeCpt = result;
        //console.log(this.groupeCpt);
        //console.log(this.groupeCpt.competences[0].id);
        const id = this.groupeCpt.competences[0].id;
        this.router.navigate(["/accueil/competence/liste/"+id+"/niveau"]);
      }
    )    
  }


}
