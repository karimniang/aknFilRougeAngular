import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { GroupeCompetence } from '../groupe-competences/grp_compt.model';
import { LoginService } from '../login/login.service';
import { Competence } from './competence.model'

@Injectable({
  providedIn: 'root'
})
export class CompetenceService {

  urlApi = "http://127.0.0.1:8000/api/admin/";  // URL de l'API
  httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + this.loginService.getToken()
    })
  };

  competences: Competence[] = [
    {
      id: 1,
      libelle: "libelle 1",
      deleted: false,
      niveaux: [
        {
          id: 1,
          libelle: "niveau1",
          CritereEvaluation: "critere11111",
          GroupeAction: "groupe_d'actions1111111",
          deleted: false
        },
        {
          id: 2,
          libelle: "niveau2",
          CritereEvaluation: "critere 22222",
          GroupeAction: "groupeAction 2222",
          deleted: false
        },
        {
          id: 3,
          libelle: "niveau3",
          CritereEvaluation: "critere 33333",
          GroupeAction: "groupeAction 333333",
          deleted: false
        }
      ]

    },
    {
      id: 2,
      libelle: "libelle 2",
      deleted: false,
      niveaux: [
        {
          id: 4,
          libelle: "niveau1",
          CritereEvaluation: "critere1&",
          GroupeAction: "groupe_actionnsns",
          deleted: false
        },
        {
          id: 5,
          libelle: "niveau2",
          CritereEvaluation: "critere1&",
          GroupeAction: "groupe_actionnsns",
          deleted: false
        },
        {
          id: 6,
          libelle: "niveau3",
          CritereEvaluation: "critere1&",
          GroupeAction: "groupe_actionnsns",
          deleted: false
        }
      ]

    },
    {
      id: 3,
      libelle: "libelle 3",
      deleted: false,
      niveaux: [
        {
          id: 7,
          libelle: "niveau1",
          CritereEvaluation: "critere1&",
          GroupeAction: "groupe_actionnsns",
          deleted: false
        },
        {
          id: 8,
          libelle: "niveau2",
          CritereEvaluation: "critere1&",
          GroupeAction: "groupe_actionnsns",
          deleted: false
        },
        {
          id: 9,
          libelle: "niveau3",
          CritereEvaluation: "critere1&",
          GroupeAction: "groupe_actionnsns",
          deleted: false
        }
      ]

    },
    {
      id: 4,
      libelle: "libelle 4",
      deleted: false,
      niveaux: [
        {
          id: 10,
          libelle: "niveau1",
          CritereEvaluation: "critere1&",
          GroupeAction: "groupe_actionnsns",
          deleted: false
        },
        {
          id: 11,
          libelle: "niveau2",
          CritereEvaluation: "critere1&",
          GroupeAction: "groupe_actionnsns",
          deleted: false
        },
        {
          id: 12,
          libelle: "niveau3",
          CritereEvaluation: "critere1&",
          GroupeAction: "groupe_actionnsns",
          deleted: false
        }
      ]

    },
    {
      id: 5,
      libelle: "libelle 5",
      deleted: false,
      niveaux: [
        {
          id: 13,
          libelle: "niveau1",
          CritereEvaluation: "critere1&",
          GroupeAction: "groupe_actionnsns",
          deleted: false
        },
        {
          id: 14,
          libelle: "niveau2",
          CritereEvaluation: "critere1&",
          GroupeAction: "groupe_actionnsns",
          deleted: false
        },
        {
          id: 15,
          libelle: "niveau3",
          CritereEvaluation: "critere1&",
          GroupeAction: "groupe_actionnsns",
          deleted: false
        }
      ]

    }
  ]

  constructor(private httpclient: HttpClient, private router: Router, private loginService: LoginService) { }

  // getAllCompetences():Competence[]{
  //   return this.competences;
  // }

  getAllCompetences(): Observable<GroupeCompetence> {
    return this.httpclient.get<GroupeCompetence>(this.urlApi + "grpecompetences?deleted=false", this.httpOptions)
  }

  myCompetences(): Observable<Competence> {
    return this.httpclient.get<Competence>(this.urlApi + "competences", this.httpOptions)
  }
  //getIdBy
  // getCompetenceById(id:number): Competence{
  //   const competenceFOund = this.competences.find(
  //     (c:Competence)=>{
  //       return c.id === id;
  //     }
  //   );
  //   return competenceFOund;
  // }

  getCompetenceById(id): Observable<Competence> {
    return this.httpclient.get<Competence>(this.urlApi + "competences/" + id, this.httpOptions)

  }
  addCompetence(competence) {
    return this.httpclient.post(this.urlApi + "competences",competence, this.httpOptions).subscribe(
      (resp) => {
        console.log(resp);
        
        Swal.fire(
          'Competence added',
          'Cliquez pour accéder à la liste des competences',
          'success'
        ).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['/accueil/competence/liste']);
          }
        })
      },
      (error) => {
        console.log(error);
        if (error.status === 201) {
          Swal.fire(
            'Competence added',
            'Cliquez pour accéder à la liste des competences',
            'success'
          ).then((result) => {
            if (result.isConfirmed) {
              this.router.navigate(['/accueil/competence/liste']);
            }
          })
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.error['hydra:description']
          })
        }
      }
    )
  }

  updateCompetence(id, competence){
    return this.httpclient.put(this.urlApi + "competences/"+id,competence, this.httpOptions).subscribe(
      (resp)=>{
        console.log(resp);
        console.log("ok");
        
        

      },
      (error)=>{
        console.log(error);
        if (error.status === 201) {
          Swal.fire(
            'Competence updated',
            'Cliquez pour accéder à la liste des competences',
            'success'
          ).then((result) => {
            if (result.isConfirmed) {
              this.router.navigate(['/accueil/competence/liste']);
            }
          })
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.error['hydra:description']
          })
        }
      }
    )
  }

  removeOneCompetence(id){
    return this.httpclient.delete(this.urlApi+"competences/"+id,this.httpOptions).subscribe(
      response =>{
        Swal.fire(
          'Profil deleted with success!',
          'Click to access the list of competences!',
          'success'
        )
        return this.router.navigate(['/accueil/competence/liste']);
      },
      resa => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
        })
        return resa
      }
    );
  }
}
