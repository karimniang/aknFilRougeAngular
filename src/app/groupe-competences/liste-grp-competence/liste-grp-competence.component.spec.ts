import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeGrpCompetenceComponent } from './liste-grp-competence.component';

describe('ListeGrpCompetenceComponent', () => {
  let component: ListeGrpCompetenceComponent;
  let fixture: ComponentFixture<ListeGrpCompetenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeGrpCompetenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeGrpCompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
