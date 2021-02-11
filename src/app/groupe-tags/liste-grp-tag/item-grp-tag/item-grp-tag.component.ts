import { Component, Input, OnInit } from '@angular/core';
import { GroupeTag } from '../../grp-tags.model';

@Component({
  selector: 'app-item-grp-tag',
  templateUrl: './item-grp-tag.component.html',
  styleUrls: ['./item-grp-tag.component.scss']
})
export class ItemGrpTagComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.toogleDiv()
  }
  toogleDiv() {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }
  }

  @Input()
  groupeTag: GroupeTag;
}
