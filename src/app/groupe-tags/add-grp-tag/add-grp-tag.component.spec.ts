import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGrpTagComponent } from './add-grp-tag.component';

describe('AddGrpTagComponent', () => {
  let component: AddGrpTagComponent;
  let fixture: ComponentFixture<AddGrpTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGrpTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGrpTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
