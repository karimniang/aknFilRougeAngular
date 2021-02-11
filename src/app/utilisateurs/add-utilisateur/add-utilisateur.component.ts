import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Data, Router } from '@angular/router';
import { UtilisateursService } from '../utilisateurs.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-utilisateur',
  templateUrl: './add-utilisateur.component.html',
  styleUrls: ['./add-utilisateur.component.scss']
})
export class AddUtilisateurComponent implements OnInit {

  userForm: FormGroup;
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
  url;
  msg = "";
  user;
  id : number;

  constructor(private userService: UtilisateursService,private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.route.data.subscribe(
      (data:Data)=>{
        this.user = data.user;
      }
    )
    if (!this.id) {
      this.userForm = this.formBuilder.group({
        profil: [null, Validators.required],
        prenom: [null, Validators.required],
        nom: [null, Validators.required],
        email: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
        avatar: [null],
        telephone: [null, Validators.required]
      });
      
    }else {
      this.userForm = this.formBuilder.group({
        prenom: [this.user.firstname, Validators.required],
        nom: [this.user.lastname, Validators.required],
        email: [this.user.email, [Validators.required, Validators.pattern(this.emailRegx)]],
        avatar: [null],
        telephone: [this.user.telephone, Validators.required]
      });
    }

  }


  onSubmitForm() {
//    return console.log(this.userForm.value.avatar);
    const userFormData = new FormData()
    userFormData.append('firstname', this.userForm.value.prenom);
    userFormData.append('lastname', this.userForm.value.nom);
    userFormData.append('email', this.userForm.value.email);
    userFormData.append('telephone', this.userForm.value.telephone);
    userFormData.append('avatar', this.userForm.value.avatar);

    if (!this.userForm.valid) {
      return;
    }

    if (!this.id) {
      this.userService.addUser(this.userForm.value.profil, userFormData)
    }else{
      const profil = (this.user.profil.libelle).toLowerCase()+"s";
      //return console.log(profil);
      userFormData.append('_method','PUT');
      
      this.userService.UpdateUser(profil,this.id,userFormData)
    }


    //.subscribe(
    //   result => {
    //     console.log(result['status']);
    //   },
    //   res => {
    //     console.log(res.error.detail)
    //   }
    // )

    //console.log(this.userForm.value);

    // for (let [key, value] of userFormData) {
    //   console.log(`${key}: ${value}`)
    // }

    // Swal.fire(
    //   'Utilisateur added',
    //   'Cliquer pour accéder a la liste des users',
    //   'success'
    // ).then((result)=>{
    //   if (result.isConfirmed) {
    //     this.router.navigate(["/accueil/user/liste"]);
    //   }
    // });
  }

  selectFile(event) {

    var file = event.target.files[0];;
    //var mimeType = event.target.files[0].type;

    // if (mimeType.match(/image\/*/) == null) {
    // 	this.msg = "Only images are supported";
    // 	return;
    // }

    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (_event) => {
      this.url = reader.result;
    }

    if (event.target.files.length > 0) {
      file = event.target.files[0];
      this.userForm.get('avatar').setValue(file);
    }
  }

}
