import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeGrpTagComponent } from './liste-grp-tag.component';

describe('ListeGrpTagComponent', () => {
  let component: ListeGrpTagComponent;
  let fixture: ComponentFixture<ListeGrpTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeGrpTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeGrpTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
