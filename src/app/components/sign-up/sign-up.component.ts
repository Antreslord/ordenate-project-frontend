import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/interfaces/user';
import { _UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  name: string = ''
  lastname:string = ''
  email: string = ''
  password:string = ''

  constructor(private _userService:_UserService, private router: Router){}

  addUser(){

    //validar que los valores esten diligenciados
    if(this.email == '' || this.password == ''){
      alert('Todos los campos deben estar diligenciados')
      return
    }

    //crear un objeto
    const user: User = {
      name: this.name,
      lastname: this.lastname,
      profession: 'Ingeniero Aeroespacial',
      photo_user: '', 
      email: this.email,
      password: this.password,
      apareance: 1
    }

    this._userService.signIn(user).subscribe({
      next: (v) =>{
        alert('Usuario registrado exitosamente')
        this.router.navigate([''])
      },
      error: (e: HttpErrorResponse) => {

        if(e.error.msg){
          alert(e.error.msg)
        }else{
          alert('Error en el servidor')
        }

      }
    })

  }

}
