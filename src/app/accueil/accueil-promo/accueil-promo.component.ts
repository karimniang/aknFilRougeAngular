import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';
import { PromotionService } from 'src/app/promotions/promotion.service';

@Component({
  selector: 'app-accueil-promo',
  templateUrl: './accueil-promo.component.html',
  styleUrls: ['./accueil-promo.component.scss']
})
export class AccueilPromoComponent implements OnInit {

  promotions;
  model;
  promoSelected;
  appActive: boolean = false;
  constructor(private promoService: PromotionService) { }

  ngOnInit(): void {
    this.promoService.getAllPromotions().subscribe(
      (resp) => {
        this.promotions = resp['hydra:member']
        //console.log(this.promotions);
        this.promoSelected = this.promotions['1'];
        console.log(this.promoSelected);

      }
    )
  }

  promoChoice() {
    console.log(this.model);
    //this.promoSelected = this.promotions[this.model];
    this.promotions.forEach(element => {
      if (element.id == this.model) {
        return this.promoSelected = element;
      }
    });
  }

  clickApp(i) {
    console.log(i);
    var j;
    document.getElementById(i).classList.add('active')
    const badgeClasse = document.getElementsByClassName('badge');
    console.log(badgeClasse.length);
    for (j = 0; j < badgeClasse.length; j++) {
      if (i!=j) {
        badgeClasse.item(j).classList.remove('active')
      }
    }


    //this.appActive = true;

  }

  //chart js

  public doughnutChartLabels: Label[] = ['Brief Rendu', 'Brief Validés', 'Brief Non validés', 'Brief Assigné'];
  public doughnutChartData: MultiDataSet = [
    [35, 45, 10, 20]
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
