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
    //validamos que los campos esten diligenciados
    if(this.email == '' || this.password == ''){
      this._toastr.warning('Los campos deben ser diligenciados', 'Atencion')
      return;
    }

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
        localStorage.setItem('token', token)
        this.router.navigate(['dashboard/projects'])

        this._userService.findUserByEmail(user.email).subscribe((data)=> {
          localStorage.setItem('user', JSON.stringify(data))
        })
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
