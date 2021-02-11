import { Component, Input, OnInit } from '@angular/core';
import { Promotion } from '../../promotion.model';

@Component({
  selector: 'app-item-promotion',
  templateUrl: './item-promotion.component.html',
  styleUrls: ['./item-promotion.component.scss']
})
export class ItemPromotionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()
  promotion:Promotion;

}
