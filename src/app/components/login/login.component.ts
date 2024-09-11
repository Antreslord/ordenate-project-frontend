import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/shared/interfaces/user';
import { _UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email:string = ''
  password:string = ''

  constructor(private _userService: _UserService,private router:Router, private _toastr: ToastrService){}

  login(){
    //this.router.navigate(['dashboard/projects'])

    //validamos que los campos esten diligenciados
    if(this.email == '' || this.password == ''){
      alert('Los campos deben ser diligenciados')
      return;
    }

    //crear un objeto
    //crear un objeto
    const user: User = {
      name: 'camilo',
      lastname: 'alvaro',
      profession: 'Ingeniero Aeroespacial',
      email: this.email,
      password: this.password,
      apareance: 1
    }

    this._userService.login(user).subscribe({
      next:(token) => {
        this.router.navigate(['dashboard/projects'])
        localStorage.setItem('token', token)
        localStorage.setItem('emailUsed', user.email)
      },
      error: (e: HttpErrorResponse) => {

        if(e.error.msg){
          this._toastr.error('El correo o la contraseña es incorrecta', 'Acceso Denegado')
        }else{
          this._toastr.error('Fallo en el servidor', 'Fallo critico')
        }
      
      }
    })

  }

}
