import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Data, Router } from '@angular/router';
import html2canvas from 'html2canvas';
import * as jspdf from 'jspdf';
import { Promotion } from '../promotion.model';
import { PromotionService } from '../promotion.service';
import { Apprenant } from '../apprenant/apprenant.model';
import Swal from 'sweetalert2';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-detail-promo',
  templateUrl: './detail-promo.component.html',
  styleUrls: ['./detail-promo.component.scss']
})
export class DetailPromoComponent implements OnInit {

  constructor(private router:Router,private route: ActivatedRoute, private promoService: PromotionService, private formBuilder: FormBuilder) { }

  promotionAdded;
  promotions: Promotion[];
  pageSize = 4;
  page = 1;
  show: boolean = false;

  apprenantForm: FormGroup;
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
  apprenant: any;
  apprenants: string[] = [];
  apprenantsCSV: Apprenant[] = [];
  typeFile;
  crud = false;
  id;
  // promoAdded


  ngOnInit(): void {

    //console.log(this.route.data);
    
    this.route.data.subscribe(
      (data: Data) => {
        console.log(data);
        this.promotionAdded = data.promoA;
      }
    )

    this.apprenantForm = this.formBuilder.group({
      email: [null, [Validators.pattern(this.emailRegx)]]
    })

    this.id = this.route.snapshot.params['id'];

  }

  //promo added
  public captureScreen() {
    var data = document.getElementById('todownload');
    html2canvas(data).then(canvas => {
      // Few necessary setting options  
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf.jsPDF('p', 'mm', 'a4');  //A4 size page of PDF  
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('MYPdf.pdf');  //Generated PDF   
    });
  }

  public ajoutApp() {
    this.show = true;
  }

  public annulation() {
    this.show = false;
  }

  public changeListener(event) {
    this.crud = true;
    this.apprenantsCSV = [];
    const files = event.target.files;
    this.typeFile = files[0].type;
    //console.log(files[0].type);
    if (files && files.length > 0) {
      let file: File = files.item(0);
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
      }
    }
  }

  //chips for apprenants
  onApprenantKeyDown() {
    if (this.apprenantForm.invalid) {
      return
    }
    this.apprenant = this.apprenantForm.value.email;
    if (!this.apprenant) return;
    if (!this.apprenants.includes(this.apprenant)) {
      this.apprenants.push(this.apprenant);
      this.apprenantForm.controls['email'].reset();

      //console.log(this.apprenantForm.value);

      //console.log(this.apprenants);
    }
  }

  dropApprenant(index: any) {
    this.apprenants.splice(index, 1);
  }

  public onSubmitForm() {
    //console.log(this.apprenants);
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
    const newApprenant = new FormData();
    
    newApprenant.append("fichier",'');
    this.apprenantsCSV.forEach(
      (emailApp, index) => {
        newApprenant.append("apprenants[" + index + "]", emailApp.email + "," + emailApp.nom + "," + emailApp.prenom)
      }
    );
    newApprenant.append("_method",'PUT');
    
    this.promoService.addApprenantToPromo(newApprenant,this.id).subscribe(
      (result)=>{
        console.log("ok");
        
        console.log(result);
        
        Swal.fire(
          'Apprenants added with success!',
          'success'
        ).then(
          (res)=>{
            if (res.isConfirmed) {
              window.location.reload()
            }
          }
        )
      },
      (err)=>{
        console.log("pas ok");
        console.log(err);
        
        
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
    )

    newApprenant.forEach(
      (elem) => {
        console.log(elem);
      }
    )
  }

}
