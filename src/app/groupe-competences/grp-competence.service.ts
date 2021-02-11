import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { LoginService } from '../login/login.service';
import { GroupeCompetence } from './grp_compt.model'

@Injectable({
  providedIn: 'root'
})
export class GrpCompetenceService {

  groupe_competences: GroupeCompetence[]=[
    {
      id:1,
      libelle: "libelle groupe 1",
      description: "description groupe 1 && Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quos!",
      competences:[
        {
          id:1,
          libelle: "libelle 1",
          deleted: false,
          niveaux:[
            {
              id:1,
              libelle:"niveau1",
              CritereEvaluation:"critere11111",
              GroupeAction:"groupe_d'actions1111111",
              deleted:false
            },
            {
              id:2,
              libelle:"niveau2",
              CritereEvaluation:"critere 22222",
              GroupeAction:"groupe_actions 2222",
              deleted:false
            },
            {
              id:3,
              libelle:"niveau3",
              CritereEvaluation:"critere 33333",
              GroupeAction:"groupe_actions 333333",
              deleted:false
            }
          ]
    
        },
        {
          id:2,
          libelle: "libelle 2",
          deleted: false,
          niveaux:[
            {
              id:4,
              libelle:"niveau1",
              CritereEvaluation:"critere1&",
              GroupeAction:"groupe_actionnsns",
              deleted:false
            },
            {
              id:5,
              libelle:"niveau2",
              CritereEvaluation:"critere1&",
              GroupeAction:"groupe_actionnsns",
              deleted:false
            },
            {
              id:6,
              libelle:"niveau3",
              CritereEvaluation:"critere1&",
              GroupeAction:"groupe_actionnsns",
              deleted:false
            }
          ]
    
        }
      ]
    },
    {
      id:2,
      libelle: "libelle groupe 2",
      description: "description groupe 2 || Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quos!",
      competences:[
        {
          id:1,
          libelle: "libelle compp 1",
          deleted: false,
          niveaux:[
            {
              id:1,
              libelle:"niveau1",
              CritereEvaluation:"critere11111",
              GroupeAction:"groupe_d'actions1111111",
              deleted:false
            },
            {
              id:2,
              libelle:"niveau2",
              CritereEvaluation:"critere 22222",
              GroupeAction:"groupe_actions 2222",
              deleted:false
            },
            {
              id:3,
              libelle:"niveau3",
              CritereEvaluation:"critere 33333",
              GroupeAction:"groupe_actions 333333",
              deleted:false
            }
          ]
    
        },
        {
          id:2,
          libelle: "libelle competence 2",
          deleted: false,
          niveaux:[
            {
              id:4,
              libelle:"niveau1",
              CritereEvaluation:"critere1&",
              GroupeAction:"groupe_actionnsns",
              deleted:false
            },
            {
              id:5,
              libelle:"niveau2",
              CritereEvaluation:"critere1&",
              GroupeAction:"groupe_actionnsns",
              deleted:false
            },
            {
              id:6,
              libelle:"niveau3",
              CritereEvaluation:"critere1&",
              GroupeAction:"groupe_actionnsns",
              deleted:false
            }
          ]
    
        }
      ]
    }
  ];
  constructor(private httpclient:HttpClient, private loginService:LoginService, private router:Router) { }
  urlApi = "http://127.0.0.1:8000/api/admin/";  // URL de l'API
  httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer '+ this.loginService.getToken()
    })
  };

  // getAll():GroupeCompetence[] {
  //   return this.groupe_competences;
  // }

  getAllGroupe():Observable<GroupeCompetence[]> {
    return this.httpclient.get<GroupeCompetence[]>(this.urlApi+"grpecompetences?deleted=false",this.httpOptions);
  }

  getOneGroupeCOmpetences(id){
    return this.httpclient.get<GroupeCompetence>(this.urlApi+"grpecompetences/"+id,this.httpOptions);
  }

  addGroupeCompetence(grpCompetence){
    return this.httpclient.post(this.urlApi+"grpecompetences",grpCompetence,this.httpOptions).subscribe(
      (resp)=>{
        console.log('ok');
        console.log(resp);


      },
      (err)=>{
        if (err['status'] === 201) {
          Swal.fire(
            'Groupe Competence added!',
            'Click to access the list of groupe competences!',
            'success'
          ).then(
            (res)=>{
              if (res.isConfirmed) {
                this.router.navigate(['/accueil/grpe-competence/liste']);
              }
            }
          )
        }else {

          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.error
          })
        }
        
      }
    );
  }

  updateGroupeCompetence(id, grpCompetence){
    return this.httpclient.put(this.urlApi+"grpecompetences/"+id,grpCompetence,this.httpOptions).subscribe(
      (resp)=>{
        console.log("ok");
        // console.log(resp);
        Swal.fire(
          'Groupe Competence Updated!',
          'Click to access the list of groupe competences!',
          'success'
        ).then(
          (res)=>{
            if (res.isConfirmed) {
              this.router.navigate(['/accueil/grpe-competence/liste']);
            }
          }
        )
      },
      (err)=>{
        console.log("non");
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.error
        })
      }
    )
  }

  removeOneGroupeCompetence(id){
    return this.httpclient.delete(this.urlApi+"grpecompetences/"+id,this.httpOptions).subscribe(
      response =>{
        Swal.fire(
          'Groupe Competence deleted with success!',
          'Click to access the list of group competences!',
          'success'
        )
        return this.router.navigate(['/accueil/grpe-competence/liste']);
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
