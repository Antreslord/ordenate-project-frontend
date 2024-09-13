import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { _ObservablesConnectionService } from 'src/app/shared/services/observables-connection.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  theme:boolean = true; 

  constructor(private router:Router, private connectionObservables:_ObservablesConnectionService){
    this.sendTheme()
  }

  sendTheme(){
    if(this.theme){
      this.theme = false  
      this.connectionObservables.setBoolean(this.theme)
    }else{
      this.theme = true
      this.connectionObservables.setBoolean(this.theme)
    }
  }

  logOut(){
    localStorage.removeItem('token')
    localStorage.removeItem('emailUsed')
    localStorage.removeItem('user')
    this.router.navigate([''])
  }

}
