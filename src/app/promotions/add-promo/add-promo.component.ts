import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import * as $ from 'jquery';
import Stepper from 'bs-stepper';
import { ReferentielService } from 'src/app/referentiels/referentiel.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PromotionService } from '../promotion.service';
import {Apprenant} from '../apprenant/apprenant.model'


import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { UtilisateursService } from 'src/app/utilisateurs/utilisateurs.service';


@Component({
  selector: 'app-add-promo',
  templateUrl: './add-promo.component.html',
  styleUrls: ['./add-promo.component.scss']
})
export class AddPromoComponent implements OnInit {
  @ViewChild('userNameRef', { static: false }) userNameRefElement: ElementRef;
  @ViewChild('skillsSetRef', { static: false }) skillsSetRefElement: ElementRef;

  referentiel: any;
  referentiels: string[] = [];
  isInsert: boolean;
  //Formateurs
  formateur: any;
  formateurs: string[]=[];
  formateursId= [];
  //steeper
  private stepper: Stepper;
  //Autocompleting Referentiel
  listeLibelle;
  keyword = "libelle";
  //Autocompleting Referentiel
  listeFormateur;
  keywordFormateur = "firstname";
  //form
  promoForm: FormGroup;
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
  //apprenants
  apprenant: any;
  apprenants: string[] = [];
  apprenantsCSV: Apprenant[] = [];
  crud;
  promoAdded
  //file
  fileTest:boolean = false;

  constructor(private router: Router,private userService:UtilisateursService, private refService: ReferentielService, private promoService: PromotionService, private formBuilder: FormBuilder) { }

  //promo added
  // public captureScreen()  
  // {  
  //   var data = document.getElementById('test-l-1');  
  //   html2canvas(data).then(canvas => {  
  //     // Few necessary setting options  
  //     var imgWidth = 208;   
  //     var pageHeight = 295;    
  //     var imgHeight = canvas.height * imgWidth / canvas.width;  
  //     var heightLeft = imgHeight;  

  //     const contentDataURL = canvas.toDataURL('image/png')  
  //     let pdf = new jspdf.jsPDF('p', 'mm', 'a4'); // A4 size page of PDF  
  //     var position = 0;  
  //     pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
  //     pdf.save('MYPdf.pdf'); // Generated PDF   
  //   });  
  // }

  ngOnInit(): void {
    //step init
    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true
    })

    //list des referentiels
    this.refService.getAllReferentiels().subscribe(
      (resp) => {
        this.listeLibelle = resp['hydra:member'];
        console.log(this.listeLibelle);
      }
    );

    //LIste des formateurs
      this.userService.getFormateurs().subscribe(
        (response)=>{
          this.listeFormateur = response['hydra:member'];
          console.log(this.listeFormateur);
        }
      );

    //formulaire promo
    this.promoForm = this.formBuilder.group({
      titre: [null, Validators.required],
      description: [null, Validators.required],
      langue: [null, Validators.required],
      fabrique: [null, Validators.required],
      refAgate: [null, Validators.required],
      dateDebut: ["2020-12-18", Validators.required],
      dateFin: ["2020-12-20", Validators.required],
      referentiel: [null],
      formateur:[null],
      avatar: [null],
      apprenant: [null, [Validators.pattern(this.emailRegx)]],
      fichier: [null]
    });
  }
  //chips for referentiels
  onSkillsSetKeydown(e) {

    if (!e.libelle) {
      this.referentiel = e.target.value;
    } else {
      this.referentiel = e.libelle;
    }
    if (!this.referentiel) return;
    if (!this.referentiels.includes(this.referentiel)) {
      this.referentiels.push(this.referentiel);

      //console.log(this.referentiels);
    }
  }

  dropSkill(index: any) {
    this.referentiels.splice(index, 1);
  }

  //Chips formateurs
  onformateursSetKeydown(e) {
    var id: number
    id = e.id;
    this.formateur = e.firstname;
    
    if (!this.formateur) return;
    if (!this.formateurs.includes(this.formateur)) {
      this.formateurs.push(this.formateur);
      //console.log(this.referentiels);
    }
    if (!this.formateursId.includes(id)) {
      this.formateursId.push(+id);
      console.log(this.formateursId);
    }
  }

  dropFormateur(index: any) {
    this.formateurs.splice(index, 1);
  }

  //chips for apprenants
  onApprenantKeyDown() {
    this.apprenant = this.promoForm.value.apprenant;
    if (!this.apprenant) return;
    if (!this.apprenants.includes(this.apprenant)) {
      this.apprenants.push(this.apprenant);
      this.promoForm.controls['apprenant'].reset();

      //console.log(this.promoForm.value);

      //console.log(this.apprenants);
    }
  }

  dropApprenant(index: any) {
    this.apprenants.splice(index, 1);
  }

  //step form
  next() {
    this.stepper.next();
  }

  previous() {
    this.stepper.previous();
  }

  //submitted form
  onSubmitForm() {
    //console.log(this.promoForm.controls.apprenant.errors.pattern);

    this.apprenants.forEach(
      (elem) => {
        if (!this.apprenantsCSV.find(
          (apprenant) => {
            return apprenant.email === elem;
          }
        )) {
          this.apprenantsCSV.push(new Apprenant("lastname", "firstname", elem.trim()));
        }
      }
    )
    const newPromo = new FormData();

    newPromo.append("titre", this.promoForm.value.titre);
    newPromo.append("lieu", "Default Dakar");
    newPromo.append("description", this.promoForm.value.description);
    newPromo.append("langue", this.promoForm.value.langue);
    newPromo.append("fabrique", this.promoForm.value.fabrique);
    newPromo.append("referenceAgate", this.promoForm.value.refAgate);
    newPromo.append("dateDebut", this.promoForm.value.dateDebut);
    newPromo.append("dateFin", this.promoForm.value.dateFin);
    newPromo.append("image", this.promoForm.value.avatar);
    newPromo.append("fichier", this.promoForm.value.fichier);
    this.referentiels.forEach(
      (libReferentiel, index) => {
        newPromo.append("referentiels[" + index + "]", libReferentiel)
      }
    );
    this.formateursId.forEach(
      (id, index)=>{
        newPromo.append("formateurs["+index+"]",id)
      }
    );
    this.apprenantsCSV.forEach(
      (emailApp, index) => {
        newPromo.append("apprenants[" + index + "]", emailApp.email + "," + emailApp.nom + "," + emailApp.prenom)
      }
    );

    // newPromo.forEach(
    //   (elem)=>{
    //     console.log(elem);

    //   }
    // )
    //console.log(this.apprenants);
    //console.log(this.apprenantsCSV);

    //console.log(this.promoForm.value);

    this.promoService.addPromotion(newPromo).subscribe(
      (resp) => {
        console.log(resp);
        Swal.fire(
          'Promotion added!',
          'Click to access the list of promotions!',
          'success'
        )
         //.then(
        //   (res) => {
        //     if (res.isConfirmed) {
        //       this.router.navigate(['/accueil/promotion/liste']);
        //     }
        //   }
        // )
        //this.promoAdded = resp;
        this.router.navigate(['/accueil/promo/created'],{
          queryParams: {
            id: resp['id']
          }
        });
      },
      (err) => {
        var myErroPending = "";
        //console.log('non');
        //console.log(err.error.detail);
        if (typeof err.error == "string") {
          myErroPending = err.error;
        } else if (typeof err.error == "object") {
          myErroPending = err.error.detail;
        }
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: myErroPending
        })
      }
    );

  }

  //Gestion Image
  selectFile(event) {
    //var file = event.target.files[0];

    if (event.target.files.length > 0) {
      this.fileTest = true;
      const file = event.target.files[0];
      this.promoForm.get('avatar').setValue(file);
    }
  }



  //File upload function
  changeListener(event) {
    this.apprenantsCSV = [];
    const files = event.target.files;
    //console.log(files);
    if (files && files.length > 0) {
      let file: File = files.item(0);
      //console.log(file.name);
      //console.log(file.size);
      //console.log(file.type);
      //**File reader method
      let reader: FileReader = new FileReader();
      reader.readAsText(file);
      reader.onload = () => {
        let csv: any = reader.result;
        let allTextLines = [];
        allTextLines = csv.split(/\r|\n|\r/);

        //essai new method
        for (let index = 1; index < allTextLines.length - 1; index++) {
          let row = allTextLines[index].split(",");
          this.apprenantsCSV.push(new Apprenant(row[1], row[0], row[2].trim()));
        }
        //console.log(this.apprenantsCSV);
        // this.apprenantsCSV.forEach(
        //   (element) => {
        //     if (!this.apprenants.includes(element.email)) {
        //       this.apprenants.push(element['email']);
        //     }
        //   }
        // )
      }
    }

  }
}
