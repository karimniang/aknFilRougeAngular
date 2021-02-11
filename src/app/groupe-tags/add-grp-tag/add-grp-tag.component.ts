import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-grp-tag',
  templateUrl: './add-grp-tag.component.html',
  styleUrls: ['./add-grp-tag.component.scss']
})
export class AddGrpTagComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmittedForm(){
    Swal.fire(
      'Groupe added',
      'Clique to acces list',
      'success'
    ).then((result)=>{
      if (result.isConfirmed) {
        this.router.navigate(['/accueil/grpe-tags/liste'])
      }
    })
  }

}
