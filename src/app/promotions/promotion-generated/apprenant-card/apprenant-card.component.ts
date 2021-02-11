import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { PromotionService } from '../../promotion.service';

@Component({
  selector: 'app-apprenant-card',
  templateUrl: './apprenant-card.component.html',
  styleUrls: ['./apprenant-card.component.scss']
})
export class ApprenantCardComponent implements OnInit {

  constructor(private PromotionService:PromotionService) { }

  showButton:boolean=false;
  buttonLabel = "Relance";
  btnStyle= "btn btn-sm btn-outline-warning w-50";

  ngOnInit(): void {
    if (window.location.href.includes('detail')) {
      this.showButton = true;
    }

    //console.log(this.apprenant);
    
    if (!this.apprenant.attente) {
      this.buttonLabel = "Edit";
      this.btnStyle = "btn btn-sm btn-outline-primary w-50";
    }
  }

  public relanceMail(idApp){
    // console.log(idApp);
    // console.log(this.idPromo);
    this.PromotionService.relanceOneMail(idApp, this.apprenant,this.idPromo).subscribe(
      (result)=>{
        console.log(result);
        
        Swal.fire(
          'Le mail est envoyé de nouveau',
          'success'        
        )
      },
      (error)=>{
        console.log(error);
        
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
        })
      }
    )
  }


  @Input()
  apprenant;

  @Input()
  idPromo;

}
