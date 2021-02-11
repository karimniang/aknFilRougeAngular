import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { GroupeCompetence } from '../groupe-competences/grp_compt.model';
import { LoginService } from '../login/login.service';
import { Referentiel } from './referentiel.model'

@Injectable({
  providedIn: 'root'
})
export class ReferentielService {

  referentiels: Referentiel[] = [
    {
      id: 1,
      libelle: "libelle ref 1",
      description: "description 11111",
      programme: "low programme 1",
      critereEvaluation: "des criters 1&",
      critereAdmission: "des admisions 11",
      groupeCompetences: [
        {
          id: 1,
          libelle: "libelle groupe 1",
          description: "description groupe 1 && Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quos!",
          competences: [
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
                  GroupeAction: "groupe_actions 2222",
                  deleted: false
                },
                {
                  id: 3,
                  libelle: "niveau3",
                  CritereEvaluation: "critere 33333",
                  GroupeAction: "groupe_actions 333333",
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

            }
          ]
        },
        {
          id: 2,
          libelle: "libelle groupe 2",
          description: "description groupe 2 || Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quos!",
          competences: [
            {
              id: 1,
              libelle: "libelle compp 1",
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
                  GroupeAction: "groupe_actions 2222",
                  deleted: false
                },
                {
                  id: 3,
                  libelle: "niveau3",
                  CritereEvaluation: "critere 33333",
                  GroupeAction: "groupe_actions 333333",
                  deleted: false
                }
              ]

            },
            {
              id: 2,
              libelle: "libelle competence 2",
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

            }
          ]
        }
      ]

    },
    {
      id: 2,
      libelle: "libelle ref 2",
      description: "description 2222",
      programme: "low programme 2",
      critereEvaluation: "criter 22 ev",
      critereAdmission: "Admisiion 22 critt",
      groupeCompetences: [
        {
          id: 1,
          libelle: "libelle groupe 1",
          description: "description groupe 1 && Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quos!",
          competences: [
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
                  GroupeAction: "groupe_actions 2222",
                  deleted: false
                },
                {
                  id: 3,
                  libelle: "niveau3",
                  CritereEvaluation: "critere 33333",
                  GroupeAction: "groupe_actions 333333",
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

            }
          ]
        },
        {
          id: 2,
          libelle: "libelle groupe 2",
          description: "description groupe 2 || Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quos!",
          competences: [
            {
              id: 1,
              libelle: "libelle compp 1",
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
                  GroupeAction: "groupe_actions 2222",
                  deleted: false
                },
                {
                  id: 3,
                  libelle: "niveau3",
                  CritereEvaluation: "critere 33333",
                  GroupeAction: "groupe_actions 333333",
                  deleted: false
                }
              ]

            },
            {
              id: 2,
              libelle: "libelle competence 2",
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

            }
          ]
        }
      ]

    },
    {
      id: 3,
      libelle: "libelle ref 1",
      description: "description 11111",
      programme: "low programme 1",
      critereEvaluation: "des criters 1&",
      critereAdmission: "des admisions 11",
      groupeCompetences: [
        {
          id: 1,
          libelle: "libelle groupe 1",
          description: "description groupe 1 && Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quos!",
          competences: [
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
                  GroupeAction: "groupe_actions 2222",
                  deleted: false
                },
                {
                  id: 3,
                  libelle: "niveau3",
                  CritereEvaluation: "critere 33333",
                  GroupeAction: "groupe_actions 333333",
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

            }
          ]
        },
        {
          id: 2,
          libelle: "libelle groupe 2",
          description: "description groupe 2 || Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quos!",
          competences: [
            {
              id: 1,
              libelle: "libelle compp 1",
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
                  GroupeAction: "groupe_actions 2222",
                  deleted: false
                },
                {
                  id: 3,
                  libelle: "niveau3",
                  CritereEvaluation: "critere 33333",
                  GroupeAction: "groupe_actions 333333",
                  deleted: false
                }
              ]

            },
            {
              id: 2,
              libelle: "libelle competence 2",
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

            }
          ]
        }
      ]

    }
  ]
  constructor(private loginService: LoginService, private httpClient: HttpClient, private router: Router) { }

  urlApi = "http://127.0.0.1:8000/api/admin/";  // URL de l'API
  httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + this.loginService.getToken()
    })
  };

  getAllReferentiels(): Observable<Referentiel[]> {
    return this.httpClient.get<Referentiel[]>(this.urlApi + "referentiels?deleted=false", this.httpOptions);
  }

  getOneReferentiel(id):Observable<Referentiel>{
    return this.httpClient.get<Referentiel>(this.urlApi+"referentiels/"+id,this.httpOptions);
  }

  addReferentiel(formRef: FormData) {
    return this.httpClient.post(this.urlApi + "referentiels", formRef, this.httpOptions).subscribe(
      (resp) => {
        //console.log("ok");
        //console.log(resp);
        Swal.fire(
          'Referentiel added!',
          'Click to access the list of referentiels!',
          'success'
        ).then(
          (res) => {
            if (res.isConfirmed) {
              this.router.navigate(['/accueil/referentiel/liste']);
            }
          }
        )
      },
      (err) => {
        //console.log('non');
        //console.log(err.error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.error
        })

      }
    )
  }

  updateReferentiel(id,formReferentiel:FormData){
    return this.httpClient.post(this.urlApi+"referentiels/"+id,formReferentiel,this.httpOptions).subscribe(
      (resp)=>{
        //console.log('okkk');
        //console.log(resp);
        Swal.fire(
          'Referentiel Updated!',
          'Click to access the list of referentiels!',
          'success'
        ).then(
          (res) => {
            if (res.isConfirmed) {
              this.router.navigate(['/accueil/referentiel/liste']);
            }
          }
        )
        
      },
      (err)=>{
        // console.log('nooo');
        // console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.error
        })
      }
    );
  }

  removeOneReferentiel(id){
    return this.httpClient.delete(this.urlApi+"referentiels/"+id,this.httpOptions).subscribe(
      response =>{
        Swal.fire(
          'Referentiel deleted with success!',
          'Click to access the list of referentiel!',
          'success'
        )
        return this.router.navigate(['/accueil/referentiel/liste']);
      },
      resa => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
        })
      }
    );
  }
}
