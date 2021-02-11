import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { CompetenceService } from 'src/app/competences/competence.service';
import Swal from 'sweetalert2';
import { GrpCompetenceService } from '../grp-competence.service';
import { GroupeCompetence } from '../grp_compt.model';

@Component({
  selector: 'app-add-grp-competence',
  templateUrl: './add-grp-competence.component.html',
  styleUrls: ['./add-grp-competence.component.scss']
})
export class AddGrpCompetenceComponent implements OnInit {
  @ViewChild('skillsSetRef', { static: false }) skillsSetRefElement: ElementRef;

  groupeComptForm: FormGroup;
  //chips
  competence: any;  
  competences: string[] = [];  
  isInsert: boolean; 
  //autoComplete
  listeLibelle;
  keyword='libelle';
  id;
  groupeCompetence:GroupeCompetence;


  constructor(private route:ActivatedRoute,private formBuilder:FormBuilder, private GrpCompetenceService:GrpCompetenceService,private competenceService:CompetenceService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    //groupe de competence à modifier
    this.route.data.subscribe(
      (data:Data)=>{
        this.groupeCompetence = data['grpCompetence'];
        //console.log(this.groupeCompetence);
        this.groupeCompetence.competences.forEach(element=>{
          this.competences.push(element.libelle);
        })
      }
    );

    //LIste des competences
    this.competenceService.myCompetences().subscribe(
      (resp)=>{
        this.listeLibelle = resp['hydra:member'];
        //console.log(this.listeLibelle);
      }
    );

    //Formulaire groupe
    if (!this.id) {
      this.groupeComptForm = this.formBuilder.group({
        libelle:[null,Validators.required],
        description:[null, Validators.required],
        competence:[null]
      });
    }else {
      this.groupeComptForm = this.formBuilder.group({
        libelle:[this.groupeCompetence.libelle,Validators.required],
        description:[this.groupeCompetence.description, Validators.required],
        competence:[null]
      });
    }
    
  }

  //chips methodd
  onSkillsSetKeydown(e) {
    //this.competence = e;
    //console.log(e)

    if (!e.libelle) {
      this.competence = e.target.value;
    }else{
      this.competence = e.libelle;
    }
    if (!this.competence) return;  
    if (!this.competences.includes(this.competence)) { 
      this.competences.push(this.competence);
      //this.groupeComptForm.controls['competence'].reset()
     
      console.log(this.competences);
    }
  }  

  // onSkillsSetEnter(){
  //   //console.log(this.groupeComptForm.value.competence);
  //   this.competence = this.groupeComptForm.value.competence;
  //   if (!this.competences.includes(this.competence)) { 
  //     this.competences.push(this.competence);
  //   }
  //   //   this.groupeComptForm.reset({competence:null,libelle:this.groupeComptForm.value.libelle,description:this.groupeComptForm.value.description});

  //   console.log(this.competences);

  // }
  
  dropSkill(index: any) {  
    this.competences.splice(index, 1);  
  }
  
  skillsSetFocus() {  
    this.skillsSetRefElement.nativeElement.focus();  
  }
  //Autocomplete method

  onSubmittedForm(){
    if (this.groupeComptForm.invalid || this.competences.length === 0) {
      return
    }
    const groupeCompetence={
      libelle:this.groupeComptForm.value.libelle,
      description:this.groupeComptForm.value.description,
      competences: this.competences
    }

    if (!this.id) {
      this.GrpCompetenceService.addGroupeCompetence(groupeCompetence);
    }else{
      this.GrpCompetenceService.updateGroupeCompetence(this.id,groupeCompetence);
    }
    //console.log(groupeCompetence);
    
  }
  
}
