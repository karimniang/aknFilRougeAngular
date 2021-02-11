import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilSortieComponent } from './profil-sortie.component';

describe('ProfilSortieComponent', () => {
  let component: ProfilSortieComponent;
  let fixture: ComponentFixture<ProfilSortieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilSortieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilSortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
