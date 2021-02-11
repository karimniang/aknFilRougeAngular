import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AddCompetenceComponent } from './competences/add-competence/add-competence.component';
import { DetailCompetenceComponent } from './competences/detail-competence/detail-competence.component';
import { ItemCompetenceComponent } from './competences/liste-competence/item-competence/item-competence.component';
import { ListeCompetenceComponent } from './competences/liste-competence/liste-competence.component';
import { AddGrpCompetenceComponent } from './groupe-competences/add-grp-competence/add-grp-competence.component';
import { DetailGrpCompetenceComponent } from './groupe-competences/detail-grp-competence/detail-grp-competence.component';
import { ListeGrpCompetenceComponent } from './groupe-competences/liste-grp-competence/liste-grp-competence.component';
import { AddGrpTagComponent } from './groupe-tags/add-grp-tag/add-grp-tag.component';
import { DetailGrpTagComponent } from './groupe-tags/detail-grp-tag/detail-grp-tag.component';
import { ListeGrpTagComponent } from './groupe-tags/liste-grp-tag/liste-grp-tag.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddProfilSortieComponent } from './profil-sortie/add-profil-sortie/add-profil-sortie.component';
import { DetailProfilSortieComponent } from './profil-sortie/detail-profil-sortie/detail-profil-sortie.component';
import { ListeProfilSortieComponent } from './profil-sortie/liste-profil-sortie/liste-profil-sortie.component';
import { ProfilSortieComponent } from './profil-sortie/profil-sortie.component';
import { AddProfilComponent } from './profils/add-profil/add-profil.component';
import { DetailProfilComponent } from './profils/detail-profil/detail-profil.component';
import { ListeProfilComponent } from './profils/liste-profil/liste-profil.component';
import { ProfilsComponent } from './profils/profils.component';
import { AddPromoComponent } from './promotions/add-promo/add-promo.component';
import { DetailPromoComponent } from './promotions/detail-promo/detail-promo.component';
import { ListePromoComponent } from './promotions/liste-promo/liste-promo.component';
import { AddReferentielComponent } from './referentiels/add-referentiel/add-referentiel.component';
import { DetailReferentielComponent } from './referentiels/detail-referentiel/detail-referentiel.component';
import { ListeReferentielComponent } from './referentiels/liste-referentiel/liste-referentiel.component';
import { AddUtilisateurComponent } from './utilisateurs/add-utilisateur/add-utilisateur.component';
import { DetailUtilisateurComponent } from './utilisateurs/detail-utilisateur/detail-utilisateur.component';
import { ListeUtilisateurComponent } from './utilisateurs/liste-utilisateur/liste-utilisateur.component';
import { ProfilResolverService } from './profils/profil-resolver.service';
import { UtilisateurResolverService } from './utilisateurs/utilisateur-resolver.service'
import { AccueilResolverService } from "./accueil/services/accueil-resolver.service";
import { CompetenceResolverService } from "./competences/competence-resolver.service";
import { AccueilPromoComponent } from "./accueil/accueil-promo/accueil-promo.component";
import { ProfilSortieResolverService } from './profil-sortie/profil-sortie-resolver.service'
import { GrpCompetencesResolverService } from './groupe-competences/grp-competences-resolver.service'
import { ReferentielResolverService } from './referentiels/referentiel-resolver.service'
import { PromotionGeneratedComponent } from './promotions/promotion-generated/promotion-generated.component';
import { PromotionAddedResolverService } from './promotions/promotion-added-resolver.service'

const routes: Routes = [
  { path: '', redirectTo:'login', pathMatch:'full'},
  { path: 'login', component: LoginComponent},
  { path: 'accueil', component:AccueilComponent, children:
    [
      {path: '', component: AccueilPromoComponent},
      {path: 'user', children:
        [
          {path: 'liste', component: ListeUtilisateurComponent},
          {path: 'edit/:id', component: AddUtilisateurComponent,resolve:{user:UtilisateurResolverService}},
          {path: 'detail/:id', component: DetailUtilisateurComponent, resolve:{user:UtilisateurResolverService}},
          {path: 'add', component: AddUtilisateurComponent}
        ]
      },
      {path: 'profil', children:
        [
          {path: 'liste', component: ProfilsComponent},
          {path: 'edit/:id', component: ProfilsComponent, resolve:{profil:ProfilResolverService}},
          {path: 'detail/:id', component: DetailProfilComponent, resolve:{profil:ProfilResolverService}},
          {path: 'add', component: ProfilsComponent}
        ]
      },
      {path: 'competence', children:
        [
          {path: 'liste', component: ListeCompetenceComponent, children: 
            [
              {path: ':id/niveau', component: ItemCompetenceComponent}
            ]
          },
          {path: 'edit/:id', component: AddCompetenceComponent,resolve:{competence:CompetenceResolverService}},
          {path: 'detail/:id', component: DetailCompetenceComponent, resolve:{competence:CompetenceResolverService}},
          {path: 'add', component: AddCompetenceComponent}
        ]
      },
      {path: 'grpe-competence', children:
        [
          {path: 'liste', component: ListeGrpCompetenceComponent},
          {path: 'edit/:id', component: AddGrpCompetenceComponent, resolve:{grpCompetence:GrpCompetencesResolverService}},
          {path: 'detail/:id', component: DetailGrpCompetenceComponent, resolve:{grpCompetence:GrpCompetencesResolverService}},
          {path: 'add', component: AddGrpCompetenceComponent}
        ]
      },
      {path: 'referentiel', children:
        [
          {path: 'liste', component: ListeReferentielComponent},
          {path: 'edit/:id', component: AddReferentielComponent, resolve:{referentiel:ReferentielResolverService}},
          {path: 'detail/:id', component: DetailReferentielComponent, resolve:{referentiel:ReferentielResolverService}},
          {path: 'add', component: AddReferentielComponent}
        ]
      },
      {path: 'promo', children:
        [
          {path: 'liste', component: ListePromoComponent},
          {path: 'edit/:id', component: AddPromoComponent},
          {path: 'detail/:id', component: DetailPromoComponent, resolve:{promoA:PromotionAddedResolverService}},
          {path: 'add', component: AddPromoComponent},
          {path: 'created', component:PromotionGeneratedComponent, resolve:{promoA:PromotionAddedResolverService}}
        ]
      },
      {path: 'grpe-tags', children:
        [
          {path: 'liste', component: ListeGrpTagComponent},
          {path: 'edit/:id', component: AddGrpTagComponent},
          {path: 'detail/:id', component: DetailGrpTagComponent},
          {path: 'add', component: AddGrpTagComponent}
        ]
      },
      {path: 'profil-sortie', children:
        [
          {path: 'liste', component: ProfilSortieComponent},
          {path: 'edit/:id', component: ProfilSortieComponent, resolve:{profilSortie:ProfilSortieResolverService}},
          {path: 'detail/:id', component: DetailProfilSortieComponent, resolve:{profilSortie:ProfilSortieResolverService}},
          {path: 'add', component: ProfilSortieComponent}
        ]
      },
      { path: 'not-found', component: NotFoundComponent},
      { path: '**', redirectTo:'not-found'}
    ]
  },
  // { path: 'not-found', component: NotFoundComponent},
  { path: '**', redirectTo:'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
