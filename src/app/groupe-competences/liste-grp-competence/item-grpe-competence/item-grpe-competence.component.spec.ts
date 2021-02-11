import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemGrpeCompetenceComponent } from './item-grpe-competence.component';

describe('ItemGrpeCompetenceComponent', () => {
  let component: ItemGrpeCompetenceComponent;
  let fixture: ComponentFixture<ItemGrpeCompetenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemGrpeCompetenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemGrpeCompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
