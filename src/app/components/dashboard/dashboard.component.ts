import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/shared/interfaces/project';
import { User } from 'src/app/shared/interfaces/user';
import { _ObservablesConnectionService } from 'src/app/shared/services/observables-connection.service';
import { _ProjectService } from 'src/app/shared/services/project.service';
import { projectChose } from 'src/app/shared/services/project_chose.service';
import { _UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  listProjects:Project[] = []
  //private subscriptionThemeSettings: Subscription
  
  //abrir nueva ventana para un nuevo proyecto / open new window to make a new project
  pressButtonNewProject:boolean = false;

  //establece el color del ambiente
  theme:boolean = false;

  user:User;

  constructor(
    private router:Router, 
    private _projectService:_ProjectService,
    private projectChoseService:projectChose,
    private _userService: _UserService
  ){
    this.getListProjects()
    this.user = this.getInfoUser()
  }

  getListProjects(){
    this._projectService.getListProjectsByUserId().subscribe((data) => {
      this.listProjects = data
    })
  }

  getInfoUser(){

    const userInfo = this._userService.returnInfo()

    const user:User = {
      id: userInfo?.id,
      name: userInfo?.name,
      lastname: userInfo?.lastname,
      profession: userInfo?.profession,
      photo_user: userInfo?.photo_user,
      email: userInfo?.email,
      apareance: userInfo?.apareance
    }

    if(user.apareance == 1){
      this.theme = true
    }else{
      this.theme = false
    }

    return user
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
    this._projectService.setProjectInLocalStorage(this.listProjects[index])
    this.router.navigate([`dashboard/project-area/${index}`])
  }

  /*goToProject(index:number){
    this.projectChoseService.setInfoProject(this.listProjects[index])
    this.router.navigate(['dashboard/project-area'])
  }*/
}
