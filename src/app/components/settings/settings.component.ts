import { Component } from '@angular/core';
import { Router, TitleStrategy } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { _ObservablesConnectionService } from 'src/app/shared/services/observables-connection.service';
import { _UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  theme:boolean = false; 

  constructor(private router:Router, private _userService: _UserService, private _toastr: ToastrService){
  }

  changeTheme(){

    const userInfo:any = localStorage.getItem('user')
    const userJSON = JSON.parse(userInfo)
    const { id, apareance } = userJSON

    if(apareance ){
      this.theme = false
    }else{
      this.theme = true
    }

    userJSON.apareance = this.theme

    this._userService.updateUser(id,userJSON).subscribe(() => {
      localStorage.setItem('user',JSON.stringify(userJSON));
      window.location.reload();
    })

    
  }

  logOut(){
    localStorage.clear()
    this.router.navigate([''])
  }

}
