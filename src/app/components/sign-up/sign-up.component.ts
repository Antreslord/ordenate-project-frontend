import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/shared/interfaces/user';
import { _UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  @Output() closeSignIn:EventEmitter<boolean>

  name: string = ''
  lastname:string = ''
  email: string = ''
  password:string = ''

  constructor(private _userService:_UserService, private _toastr: ToastrService, private router: Router){
    this.closeSignIn = new EventEmitter()
  }

  addUser(){

    //validar que los valores esten diligenciados
    if(this.email == '' || this.password == ''){
      alert('Todos los campos deben estar diligenciados')
      this._toastr.error('Todos los campos deben estar llenos', 'Error')
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
        this._toastr.success('Usuario creado exitosamente', 'Genial')
        this.closeSignIn.emit(false)
        this.router.navigate([''])
      },
      error: (e: HttpErrorResponse) => {

        if(e.error.msg){
          this._toastr.error(e.error.msg, 'error')
        }else{
          this._toastr.error('Error del servidor', 'Error')
        }

      }
    })

  }

}
