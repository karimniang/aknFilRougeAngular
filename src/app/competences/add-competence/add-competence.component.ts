import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { GrpCompetenceService } from 'src/app/groupe-competences/grp-competence.service';
import { GroupeCompetence } from 'src/app/groupe-competences/grp_compt.model';
import Swal from 'sweetalert2';
import { Competence } from '../competence.model';
import { CompetenceService } from '../competence.service';

@Component({
  selector: 'app-add-competence',
  templateUrl: './add-competence.component.html',
  styleUrls: ['./add-competence.component.scss']
})
export class AddCompetenceComponent implements OnInit {

  // niveau1 = false;
  // niveau2 = false;
  // niveau3 = false;

  id;
  competence;
  constructor(private route: ActivatedRoute, private grpCompService: GrpCompetenceService, private competenceService: CompetenceService, private formBuilder: FormBuilder) { }

  competenceForm: FormGroup;
  groupeCompetences: GroupeCompetence[];
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.route.data.subscribe(
      (data:Data)=>{
        this.competence = data['competence'];
        //console.log(this.competence);
      }
    );
    if (!this.id) {
      this.competenceForm = this.formBuilder.group({
        groupeCompetence: [null, Validators.required],
        libelle: [null, Validators.required],
        libelleNiveau1: new FormControl({ value: "Niveau 1", disabled: true }, Validators.required),
        groupe1: [null, Validators.required],
        critere1: [null, Validators.required],
        libelleNiveau2: new FormControl({ value: "Niveau 2", disabled: true }, Validators.required),
        groupe2: [null, Validators.required],
        critere2: [null, Validators.required],
        libelleNiveau3: new FormControl({ value: "Niveau 3", disabled: true }, Validators.required),
        groupe3: [null, Validators.required],
        critere3: [null, Validators.required]
      });
    }else  if (this.competence.niveaux.length === 0) {
      
        this.competenceForm = this.formBuilder.group({
          libelle: [this.competence.libelle, Validators.required],
          libelleNiveau1: new FormControl({ value: "Niveau 1", disabled: true }, Validators.required),
          groupe1: [null, Validators.required],
          critere1: [null, Validators.required],
          libelleNiveau2: new FormControl({ value: "Niveau 2", disabled: true }, Validators.required),
          groupe2: [null, Validators.required],
          critere2: [null, Validators.required],
          libelleNiveau3: new FormControl({ value: "Niveau 3", disabled: true }, Validators.required),
          groupe3: [null, Validators.required],
          critere3: [null, Validators.required]
        });
      }else{  

      this.competenceForm = this.formBuilder.group({
        groupeCompetence: [this.competence.groupeCompetences[0].libelle, Validators.required],
        libelle: [this.competence.libelle, Validators.required],
        libelleNiveau1: new FormControl({ value: "Niveau 1", disabled: true }, Validators.required),
        groupe1: [this.competence.niveaux[0].GroupeAction, Validators.required],
        critere1: [this.competence.niveaux[0].CritereEvaluation, Validators.required],
        libelleNiveau2: new FormControl({ value: "Niveau 2", disabled: true }, Validators.required),
        groupe2: [this.competence.niveaux[1].GroupeAction, Validators.required],
        critere2: [this.competence.niveaux[1].CritereEvaluation, Validators.required],
        libelleNiveau3: new FormControl({ value: "Niveau 3", disabled: true }, Validators.required),
        groupe3: [this.competence.niveaux[2].GroupeAction, Validators.required],
        critere3: [this.competence.niveaux[2].CritereEvaluation, Validators.required]
      });
    }
    

    this.grpCompService.getAllGroupe().subscribe(
      (resp) => {
        this.groupeCompetences = resp['hydra:member'];
      }
    );
  }

  onSubmitForm() {

    if (this.competenceForm.invalid) {
      return 
    }

    //console.log(this.competenceForm.value);
    const competence = {
      libelle: this.competenceForm.value.libelle,
      groupeCompetences: [{ libelle: this.competenceForm.value.groupeCompetence }],
      niveaux: [
        {
          libelle: "niveau1",
          groupeAction: this.competenceForm.value.groupe1,
          critereEvaluation: this.competenceForm.value.critere1
        },
        {
          libelle: "niveau2",
          groupeAction: this.competenceForm.value.groupe2,
          critereEvaluation: this.competenceForm.value.critere2
        },
        {
          libelle: "niveau3",
          groupeAction: this.competenceForm.value.groupe3,
          critereEvaluation: this.competenceForm.value.critere3
        }
      ]
    }
    //console.log(competence);
    if (!this.id) {
      this.competenceService.addCompetence(competence);
    }else{
      this.competenceService.updateCompetence(this.id,competence);
    }

  }

}
