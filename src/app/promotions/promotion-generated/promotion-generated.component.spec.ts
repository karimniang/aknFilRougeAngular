import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionGeneratedComponent } from './promotion-generated.component';

describe('PromotionGeneratedComponent', () => {
  let component: PromotionGeneratedComponent;
  let fixture: ComponentFixture<PromotionGeneratedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionGeneratedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionGeneratedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
