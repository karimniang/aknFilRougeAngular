import { Component, OnInit } from '@angular/core';
import { Promotion } from '../promotion.model';
import { PromotionService } from '../promotion.service'

@Component({
  selector: 'app-liste-promo',
  templateUrl: './liste-promo.component.html',
  styleUrls: ['./liste-promo.component.scss']
})
export class ListePromoComponent implements OnInit {

  promotions:Promotion[];
  pageSize = 5;
  page=1;
  constructor(private promoService:PromotionService) { }

  ngOnInit(): void {
   this.promoService.getAllPromotions().subscribe(
     (resp)=>{
       this.promotions = resp['hydra:member'];
     }
   );
  }

 
}
