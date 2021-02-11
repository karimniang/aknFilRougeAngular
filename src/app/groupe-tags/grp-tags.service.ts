import { Injectable } from '@angular/core';
import { GroupeTag } from '../groupe-tags/grp-tags.model'

@Injectable({
  providedIn: 'root'
})
export class GrpTagsService {
  
  groupeTags :GroupeTag[] = [
    {
      id:1,
      libelle: "Groupe tag 1",
      description: "description du groupe 1",
      tags:[
        {
          id:1,
          libelle:"tag libelle 1"
        },
        {
          id:2,
          libelle:"tag libelle 2"
        },
        {
          id:3,
          libelle:"tag libelle 3"
        }
      ]
    },
    {
      id:2,
      libelle: "Groupe tag 2",
      description: "description du groupe 2",
      tags:[
        {
          id:3,
          libelle:"tag libelle 3"
        },
        {
          id:2,
          libelle:"tag libelle 2"
        },
        {
          id:4,
          libelle:"tag libelle 4"
        }
      ]
    },
    {
      id:3,
      libelle: "Groupe tag 3",
      description: "description du groupe 3",
      tags:[
        {
          id:1,
          libelle:"tag libelle 1"
        },
        {
          id:3,
          libelle:"tag libelle 3"
        },
        {
          id:4,
          libelle:"tag libelle 4"
        },
        {
          id:5,
          libelle:"tag libelle 5"
        }
      ]
    }
  ]
  constructor() { }

  getAll():GroupeTag[] {
    return this.groupeTags;
  }
}
