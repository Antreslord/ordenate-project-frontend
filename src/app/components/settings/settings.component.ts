import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ObservablesConnectionService } from 'src/app/shared/services/observables-connection.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  theme:boolean = true; 

  constructor(private router:Router, private connectionObservables:ObservablesConnectionService){
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
    this.router.navigate([''])
  }



}
