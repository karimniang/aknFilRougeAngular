import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilPromoComponent } from './accueil-promo.component';

describe('AccueilPromoComponent', () => {
  let component: AccueilPromoComponent;
  let fixture: ComponentFixture<AccueilPromoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueilPromoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
