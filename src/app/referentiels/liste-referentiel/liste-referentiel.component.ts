import { Component, OnInit } from '@angular/core';
import { Referentiel } from '../referentiel.model';
import {  ReferentielService } from '../referentiel.service'

@Component({
  selector: 'app-liste-referentiel',
  templateUrl: './liste-referentiel.component.html',
  styleUrls: ['./liste-referentiel.component.scss']
})
export class ListeReferentielComponent implements OnInit {

  referentiels: Referentiel[];
  pageSize = 5;
  page=1;
  constructor(private refService: ReferentielService) { }

  ngOnInit(): void {
    this.refService.getAllReferentiels().subscribe(
      (resp)=>{
        this.referentiels = resp['hydra:member'];
        console.log(this.referentiels);
        
      }
    );
  }
  

}
