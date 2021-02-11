import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemGrpTagComponent } from './item-grp-tag.component';

describe('ItemGrpTagComponent', () => {
  let component: ItemGrpTagComponent;
  let fixture: ComponentFixture<ItemGrpTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemGrpTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemGrpTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
