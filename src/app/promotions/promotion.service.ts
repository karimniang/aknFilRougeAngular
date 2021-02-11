import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { LoginService } from '../login/login.service';
import { Promotion } from './promotion.model'

@Injectable({
  providedIn: 'root'
})
export class PromotionService {
  promotions: Promotion[] = [
    {
      id: 1,
      titre: "titre1",
      description: "description",
      langue: "Français",
      fabrique: "ODC",
      refAgate: "123FAODC",
      dateDebut: new Date("12-12-2019"),
      dateFin: new Date("12-12-2020"),
      referentiels: [
        {
          id: 1,
          libelle: "libelle ref 1",
          description: "Presentation 11111",
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
                      GroupeAction: "GroupeAction 2222",
                      deleted: false
                    },
                    {
                      id: 3,
                      libelle: "niveau3",
                      CritereEvaluation: "critere 33333",
                      GroupeAction: "GroupeAction 333333",
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
                      GroupeAction: "GroupeAction 2222",
                      deleted: false
                    },
                    {
                      id: 3,
                      libelle: "niveau3",
                      CritereEvaluation: "critere 33333",
                      GroupeAction: "GroupeAction 333333",
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



    }
  ]

  urlApi = "http://127.0.0.1:8000/api/admin/";  // URL de l'API
  httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + this.loginService.getToken()
    })
  };

  constructor(private loginService: LoginService, private httpClient: HttpClient, private router: Router) { }

  getAllPromotions(): Observable<Promotion> {
    return this.httpClient.get<Promotion>(this.urlApi + "promotions", this.httpOptions);
  }
  getOnePromotion(id: number): Observable<Promotion> {
    return this.httpClient.get<Promotion>(this.urlApi + "promotions/" + id, this.httpOptions);
  }

  addPromotion(formPromo: FormData) {
    return this.httpClient.post(this.urlApi + "promotions", formPromo, this.httpOptions);
  }

  addApprenantToPromo(formApp: FormData, id) {
    return this.httpClient.post(this.urlApi + "promotion/" + id + "/add/apprenants", formApp, this.httpOptions);
  }

  relanceOneMail(idApp,apprenant , idPromo) {
    return this.httpClient.post(this.urlApi + "promotion/" + idPromo + "/relanceOne/" + idApp, apprenant, this.httpOptions);
  }
}
