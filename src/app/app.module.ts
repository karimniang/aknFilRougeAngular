import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { ListeUtilisateurComponent } from './utilisateurs/liste-utilisateur/liste-utilisateur.component';
import { AddUtilisateurComponent } from './utilisateurs/add-utilisateur/add-utilisateur.component';
import { DetailUtilisateurComponent } from './utilisateurs/detail-utilisateur/detail-utilisateur.component';
import { ProfilsComponent } from './profils/profils.component';
import { ListeProfilComponent } from './profils/liste-profil/liste-profil.component';
import { AddProfilComponent } from './profils/add-profil/add-profil.component';
import { DetailProfilComponent } from './profils/detail-profil/detail-profil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompetencesComponent } from './competences/competences.component';
import { AddCompetenceComponent } from './competences/add-competence/add-competence.component';
import { ListeCompetenceComponent } from './competences/liste-competence/liste-competence.component';
import { DetailCompetenceComponent } from './competences/detail-competence/detail-competence.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { AddPromoComponent } from './promotions/add-promo/add-promo.component';
import { DetailPromoComponent } from './promotions/detail-promo/detail-promo.component';
import { ListePromoComponent } from './promotions/liste-promo/liste-promo.component';
import { ReferentielsComponent } from './referentiels/referentiels.component';
import { AddReferentielComponent } from './referentiels/add-referentiel/add-referentiel.component';
import { DetailReferentielComponent } from './referentiels/detail-referentiel/detail-referentiel.component';
import { ListeReferentielComponent } from './referentiels/liste-referentiel/liste-referentiel.component';
import { GroupeCompetencesComponent } from './groupe-competences/groupe-competences.component';
import { AddGrpCompetenceComponent } from './groupe-competences/add-grp-competence/add-grp-competence.component';
import { ListeGrpCompetenceComponent } from './groupe-competences/liste-grp-competence/liste-grp-competence.component';
import { DetailGrpCompetenceComponent } from './groupe-competences/detail-grp-competence/detail-grp-competence.component';
import { GroupeTagsComponent } from './groupe-tags/groupe-tags.component';
import { AddGrpTagComponent } from './groupe-tags/add-grp-tag/add-grp-tag.component';
import { ListeGrpTagComponent } from './groupe-tags/liste-grp-tag/liste-grp-tag.component';
import { DetailGrpTagComponent } from './groupe-tags/detail-grp-tag/detail-grp-tag.component';
import { ProfilSortieComponent } from './profil-sortie/profil-sortie.component';
import { AddProfilSortieComponent } from './profil-sortie/add-profil-sortie/add-profil-sortie.component';
import { ListeProfilSortieComponent } from './profil-sortie/liste-profil-sortie/liste-profil-sortie.component';
import { DetailProfilSortieComponent } from './profil-sortie/detail-profil-sortie/detail-profil-sortie.component';
import { ItemCompetenceComponent } from './competences/liste-competence/item-competence/item-competence.component';
import { ItemGrpeCompetenceComponent } from './groupe-competences/liste-grp-competence/item-grpe-competence/item-grpe-competence.component';
import { ItemReferentielComponent } from './referentiels/liste-referentiel/item-referentiel/item-referentiel.component';
import { ItemPromotionComponent } from './promotions/liste-promo/item-promotion/item-promotion.component';
import { ItemGrpTagComponent } from './groupe-tags/liste-grp-tag/item-grp-tag/item-grp-tag.component';
import { AccueilComponent } from './accueil/accueil.component'
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { AccueilPromoComponent } from './accueil/accueil-promo/accueil-promo.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { QRCodeModule } from 'angularx-qrcode';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PromotionGeneratedComponent } from './promotions/promotion-generated/promotion-generated.component';
import { ApprenantCardComponent } from './promotions/promotion-generated/apprenant-card/apprenant-card.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    NotFoundComponent,
    UtilisateursComponent,
    ListeUtilisateurComponent,
    AddUtilisateurComponent,
    DetailUtilisateurComponent,
    ProfilsComponent,
    ListeProfilComponent,
    AddProfilComponent,
    DetailProfilComponent,
    CompetencesComponent,
    AddCompetenceComponent,
    ListeCompetenceComponent,
    DetailCompetenceComponent,
    PromotionsComponent,
    AddPromoComponent,
    DetailPromoComponent,
    ListePromoComponent,
    ReferentielsComponent,
    AddReferentielComponent,
    DetailReferentielComponent,
    ListeReferentielComponent,
    GroupeCompetencesComponent,
    AddGrpCompetenceComponent,
    ListeGrpCompetenceComponent,
    DetailGrpCompetenceComponent,
    GroupeTagsComponent,
    AddGrpTagComponent,
    ListeGrpTagComponent,
    DetailGrpTagComponent,
    ProfilSortieComponent,
    AddProfilSortieComponent,
    ListeProfilSortieComponent,
    DetailProfilSortieComponent,
    ItemCompetenceComponent,
    ItemGrpeCompetenceComponent,
    ItemReferentielComponent,
    ItemPromotionComponent,
    ItemGrpTagComponent,
    AccueilComponent,
    AccueilPromoComponent,
    PromotionGeneratedComponent,
    ApprenantCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AutocompleteLibModule,
    NgbPaginationModule,
    QRCodeModule,
    PdfViewerModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
