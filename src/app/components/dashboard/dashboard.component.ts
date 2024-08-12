import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ObservablesConnectionService } from 'src/app/shared/services/observables-connection.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private router:Router, private connectionObservable: ObservablesConnectionService){
    this.subscriptionThemeSettings = this.connectionObservable.getBoolean().subscribe((dataBoolean)=>{
      this.theme = dataBoolean;
    })
  }

  //abrir nueva ventana para un nuevo proyecto / open new window to make a new project
  pressButtonNewProject:boolean = false;

  //establece el color del ambiente
  theme:boolean = false

  private subscriptionThemeSettings: Subscription

  goToSettings(){
    this.router.navigate(['dashboard/setting'])
  }

  goToWorkTeams(){
    this.router.navigate(['dashboard/workTeam'])
  }

  goToCalendar(){
    this.router.navigate(['dashboard/calendar'])
  }

  goToTrash(){
    this.router.navigate(['dashboard/trash'])
  }

  goToProject(){
    this.router.navigate(['dashboard/project-area'])
  }
}
