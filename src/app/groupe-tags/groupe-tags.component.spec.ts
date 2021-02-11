import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupeTagsComponent } from './groupe-tags.component';

describe('GroupeTagsComponent', () => {
  let component: GroupeTagsComponent;
  let fixture: ComponentFixture<GroupeTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupeTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupeTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
