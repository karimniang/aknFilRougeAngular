import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Promotion } from '../promotion.model';
import { PromotionService } from '../promotion.service';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-promotion-generated',
  templateUrl: './promotion-generated.component.html',
  styleUrls: ['./promotion-generated.component.scss']
})
export class PromotionGeneratedComponent implements OnInit {

  constructor(private route:ActivatedRoute, private promoService:PromotionService) { }

  promotionAdded;
  ngOnInit(): void {
    // console.log(
    //   history.state.data)
    // console.log(this.route.queryParams['data']);
    // if (window.location.href.includes("detail")) {
    //   console.log('say yes');
      
    // }
    this.route.data.subscribe(
      (data:Data)=>{
        console.log(data);
        this.promotionAdded = data.promoA;
      }
    )
    // this.route.queryParams.subscribe(
    //   (data)=>{
    //     console.log(data);
        
    //      this.promoService.getOnePromotion(+data['id']).subscribe(
    //        (resp)=>{
    //          this.promotionAdded = resp;
    //          console.log(this.promotionAdded.referentiels);
    //        }
    //      ); 
    //   }
    // );
    // this.route.data.subscribe(
    //   (data:Data)=>{
    //     console.log(data);
    //     this.promotionAdded = data.promoA;
    //   }
    // )
  }

  //promo added
   public captureScreen()  
   {  
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

}
