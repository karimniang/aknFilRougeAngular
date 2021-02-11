import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { GrpCompetenceService } from 'src/app/groupe-competences/grp-competence.service';
import { GroupeCompetence } from 'src/app/groupe-competences/grp_compt.model';
import Swal from 'sweetalert2';
import { Referentiel } from '../referentiel.model';
import { ReferentielService } from '../referentiel.service';

@Component({
  selector: 'app-add-referentiel',
  templateUrl: './add-referentiel.component.html',
  styleUrls: ['./add-referentiel.component.scss']
})
export class AddReferentielComponent implements OnInit {
  @ViewChild('skillsSetRef', { static: false }) GroupeComptRefElement: ElementRef;

  referentielForm: FormGroup;
  //chips
  oneGroupeCompetence: any;
  groupeCompetences: string[] = [];
  isInsert: boolean;
  //autoComplete
  listeLibelle;
  keyword = 'libelle';

  //modification
  id;
  referentiel: Referentiel;

  constructor(private route:ActivatedRoute, private formBuilder: FormBuilder, private refService:ReferentielService, private grpCompService: GrpCompetenceService) { }

  ngOnInit(): void {

    //referentiel à modifier
    this.route.data.subscribe(
      (data:Data)=>{
        this.referentiel = data['referentiel'];
        this.referentiel.groupeCompetences.forEach(
          (element)=>{
            this.groupeCompetences.push(element.libelle);
          }
        )
      }
    )
    this.id = this.route.snapshot.params['id'];

    //LIste des competences
    this.grpCompService.getAllGroupe().subscribe(
      (resp) => {
        this.listeLibelle = resp['hydra:member'];
        //console.log(this.listeLibelle);
      }
    );

    if (!this.id) {
      this.referentielForm = this.formBuilder.group({
        libelle: [null, Validators.required],
        description: [null, Validators.required],
        programme: [null, Validators.required],
        critereAdmission: [null, Validators.required],
        critereEvaluation: [null, Validators.required],
        groupeCompetence: [null]
      })
    }else {
      this.referentielForm = this.formBuilder.group({
        libelle: [this.referentiel.libelle, Validators.required],
        description: [this.referentiel.description, Validators.required],
        programme: [null],
        critereAdmission: [this.referentiel.critereAdmission, Validators.required],
        critereEvaluation: [this.referentiel.critereEvaluation, Validators.required],
        groupeCompetence: [null]
      })
    }
   

  }

  //chips
  onSkillsSetKeydown(e) {
    //console.log(e.libelle);
    //console.log(e.target.value);

    if (!e.libelle) {
      this.oneGroupeCompetence = e.target.value;
    } else {
      this.oneGroupeCompetence = e.libelle;
    }

    //this.oneGroupeCompetence = e;
    //console.log(e)
    if (!this.oneGroupeCompetence) return;
    if (!this.groupeCompetences.includes(this.oneGroupeCompetence)) {
      this.groupeCompetences.push(this.oneGroupeCompetence);
      //console.log(this.groupeCompetences);
    }
  }

  // onSkillsSetEnter(){
  //   //console.log(this.referentielForm.value.competence);
  //   this.oneGroupeCompetence = this.referentielForm.value.groupeCompetence;
  //   if (!this.groupeCompetences.includes(this.oneGroupeCompetence)) { 
  //     this.groupeCompetences.push(this.oneGroupeCompetence);
  //   }
  //   //console.log(this.groupeCompetences);
  // }

  dropSkill(index: any) {
    this.groupeCompetences.splice(index, 1);
  }

  skillsSetFocus() {
    this.GroupeComptRefElement.nativeElement.focus();
  }

  selectFile(event) {
    //var file = event.target.files[0];

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.referentielForm.get('programme').setValue(file);
    }
  }

  onSubmitForm() {

    if (this.referentielForm.invalid || this.groupeCompetences.length === 0) {
      return;
    }
    const newReferentiel = new FormData();
    newReferentiel.append("libelle", this.referentielForm.value.libelle);
    newReferentiel.append("description", this.referentielForm.value.description);
    newReferentiel.append("programme", this.referentielForm.value.programme);
    newReferentiel.append("critereAdmission", this.referentielForm.value.critereAdmission);
    newReferentiel.append("critereEvaluation", this.referentielForm.value.critereEvaluation);

    this.groupeCompetences.forEach((element, index) => {
      newReferentiel.append("groupeCompetences[" + index + "]", element);
    })

    newReferentiel.forEach((element, index) => {
      console.log(index + "=>" + element);
    })
    
    if (!this.id) {
      return this.refService.addReferentiel(newReferentiel);
    }else{
      newReferentiel.append("_method","PUT");
      return this.refService.updateReferentiel(this.id,newReferentiel);
    }


  }

}
