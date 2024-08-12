import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Project } from 'src/app/shared/interfaces/project';
import { ObservablesConnectionService } from 'src/app/shared/services/observables-connection.service';
import { _ProjectService } from 'src/app/shared/services/project.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  listProjects:Project[] = []

  constructor(private router:Router, private connectionObservable: ObservablesConnectionService, private _projectService:_ProjectService){
    this.subscriptionThemeSettings = this.connectionObservable.getBoolean().subscribe((dataBoolean)=>{
      this.theme = dataBoolean;
    })
    this.getListProjects()
  }

  //abrir nueva ventana para un nuevo proyecto / open new window to make a new project
  pressButtonNewProject:boolean = false;

  //establece el color del ambiente
  theme:boolean = false

  getListProjects(){
    this._projectService.getListProjects().subscribe((data) => {
      this.listProjects = data
      console.log(this.listProjects)
    })
  }  

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
