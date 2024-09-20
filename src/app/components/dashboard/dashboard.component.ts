import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Project } from 'src/app/shared/interfaces/project';
import { _ObservablesConnectionService } from 'src/app/shared/services/observables-connection.service';
import { _ProjectService } from 'src/app/shared/services/project.service';
import { projectChose } from 'src/app/shared/services/project_chose.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  listProjects:Project[] = []
  //private subscriptionThemeSettings: Subscription
  
  constructor(
    private router:Router, 
    private _connectionObservable: _ObservablesConnectionService, 
    private _projectService:_ProjectService,
    private projectChoseService:projectChose
  ){
    this.getListProjects()
    this.theme = this.colorTheme()
  }

  //abrir nueva ventana para un nuevo proyecto / open new window to make a new project
  pressButtonNewProject:boolean = false;

  //establece el color del ambiente
  theme:boolean;

  colorTheme():boolean{
    const userInfo:any = localStorage.getItem('user');
    const userJSON = JSON.parse(userInfo);
    const { apareance } = userJSON

    return apareance
  }

  getListProjects(){
    this._projectService.getListProjectsByUserId().subscribe((data) => {
      this.listProjects = data
    })
  }

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

  goToProject(index:number){
    this.projectChoseService.setInfoProject(this.listProjects[index])
    this.router.navigate(['dashboard/project-area'])
  }
}
