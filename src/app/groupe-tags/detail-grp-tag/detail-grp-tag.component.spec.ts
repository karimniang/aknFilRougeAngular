import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailGrpTagComponent } from './detail-grp-tag.component';

describe('DetailGrpTagComponent', () => {
  let component: DetailGrpTagComponent;
  let fixture: ComponentFixture<DetailGrpTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailGrpTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailGrpTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
