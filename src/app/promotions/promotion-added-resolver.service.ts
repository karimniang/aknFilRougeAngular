import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { PromotionService } from './promotion.service';

@Injectable({
  providedIn: 'root'
})
export class PromotionAddedResolverService {
  bimbo;
  constructor(private promoService: PromotionService, private router: Router) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    //console.log(route.queryParams['id']);
    if (window.location.href.includes("liste") || window.location.href.includes("detail")) {
      console.log('yes detail');
      this.promoService.getOnePromotion(+route.params['id']).subscribe(
        (res) => {
          //console.log(res);
          return res
        },
        (err) => {
          this.router.navigate(["/accueil/not-found"]);
          return EMPTY;
        }
      );
      return this.promoService.getOnePromotion(+route.params['id'])
    } else {
      console.log("yes create");
      return this.promoService.getOnePromotion(+route.queryParams['id'])
    }
  }
}
