import { Component, OnInit } from '@angular/core';
import { GroupeTag } from '../grp-tags.model';
import { GrpTagsService } from '../grp-tags.service'

@Component({
  selector: 'app-liste-grp-tag',
  templateUrl: './liste-grp-tag.component.html',
  styleUrls: ['./liste-grp-tag.component.scss']
})
export class ListeGrpTagComponent implements OnInit {

  groupeTags: GroupeTag[];
  constructor(private grpTagService: GrpTagsService) { }

  ngOnInit(): void {
    this.getAllGrpTags();
  }

  getAllGrpTags() {
    this.groupeTags = this.grpTagService.getAll();
  }
}
