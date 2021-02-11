import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import Swal from 'sweetalert2';
import { Referentiel } from '../../referentiel.model';
import { ReferentielService } from '../../referentiel.service';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { GroupeCompetence } from 'src/app/groupe-competences/grp_compt.model';
import { style } from '@angular/animations';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-item-referentiel',
  templateUrl: './item-referentiel.component.html',
  styleUrls: ['./item-referentiel.component.scss']
})



export class ItemReferentielComponent implements OnInit {

  constructor(private refService: ReferentielService, private sanitizer: DomSanitizer) { }

  hrfUrl;
  labelCollab = "Plus";
  ngOnInit(): void {
    //this.hrfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(this.b64toBlob(this.referentiel.programme)));
    //console.log(this.referentiel.groupeCompetences);

  }

  //Afficher programme
  openProgramme() {
    const file = this.b64toBlob(this.referentiel.programme);
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL, '_blank');
  }
  label(event){
    console.log(event.target.ariaExpanded);
    if (event.target.ariaExpanded == "false") {
      this.labelCollab = "Moins"
    }else{
      this.labelCollab = "Plus";
    }
  }

  //Generation pdf referentiel
  generatePdf(action = "open") {
    //console.log(this.referentiel);
    const documentPdf = {
      content: [
        {
          text: "Referentiel",
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 20]
        },
        {
          columns: [
            [
              {
                text: this.referentiel.libelle,
                style: 'name'
              },
              {
                text: this.referentiel.description
              },
              {
                text: 'Email : ' + this.referentiel.critereAdmission,
              },
              {
                text: 'Contant No : ' + this.referentiel.critereEvaluation,
              },
              {
                text: 'Groupes de competences :',
                style: 'header'
              },
              this.getGroupeCompetences(this.referentiel.groupeCompetences),
            ]
          ]
        }
      ],
      styles: {
        name: {
          fontSize: 16,
          bold: true
        },
        header: {
          fontSize: 14,
          bold: true,
          margin: [0, 20, 0, 10],
          decoration: 'underline'
        },
        groupCompTitle: {
          fontSize: 12,
          bold: true,
          italies: true
        }
      }
    }

    switch (action) {
      case 'open': pdfMake.createPdf(documentPdf).open(); break;
      case 'print': pdfMake.createPdf(documentPdf).print(); break;
      case 'download': pdfMake.createPdf(documentPdf).download(); break;
      default: pdfMake.createPdf(documentPdf).open(); break;
    }

  }

  getGroupeCompetences(grpComp: GroupeCompetence[]) {
    const grpCompetence = [];
    grpComp.forEach(
      (oneGrpComp: GroupeCompetence) => {
        grpCompetence.push(
          [
            {
              columns: [
                [
                  {
                    text: oneGrpComp.libelle,
                    style: 'groupCompTitle'
                  }
                ]
              ]
            }
          ]
        )
      }
    );
    return {
      table: {
        widths: ['*'],
        body: [
          ...grpCompetence
        ]
      }
    };
  }



  //base64 to blob
  b64toBlob(b64Data, contentType = 'application/pdf') {
    contentType = contentType || '';
    var sliceSize = 512;
    b64Data = b64Data.replace(/^[^,]+,/, '');
    b64Data = b64Data.replace(/\s/g, '');
    var byteCharacters = window.atob(b64Data);
    var byteArrays = [];
    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      var slice = byteCharacters.slice(offset, offset + sliceSize);

      var byteNumbers = new Array(slice.length);
      for (var i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      var byteArray = new Uint8Array(byteNumbers);

      byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }


  removeReferentiel(id) {
    Swal.fire(
      {
        title: 'Are you sure to delete this profil?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }
    ).then(
      (result) => {
        if (result.isConfirmed) {
          return this.refService.removeOneReferentiel(id);
        }
      }
    );
  }
  // tooglePlus(){
  //   var coll = document.getElementsByClassName("panel");
  //   var i;

  //   for (i = 0; i < coll.length; i++) {
  //     coll[i].addEventListener("click", function() {
  //       this.classList.toggle("active");
  //       var content = this.nextElementSibling;
  //       if (content.style.display === "block") {
  //         content.style.display = "none";
  //       } else {
  //         content.style.display = "block";
  //       }
  //     });
  //   }
  // }
  @Input()
  referentiel: Referentiel;

}
