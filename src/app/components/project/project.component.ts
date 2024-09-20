import { Component, EventEmitter, Output } from '@angular/core';
import { _ProjectService } from 'src/app/shared/services/project.service';
import { Project } from 'src/app/shared/interfaces/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {

  listProjects: Project[] = []
  
  
  constructor(private _projectService:_ProjectService){
    this.getListProjectsById()
  }

  ngOnInit():void{
    
  }


  getListProjectsById(){
    this._projectService.getListProjectsByUserId().subscribe((data) => {
      this.listProjects = data
    })  
    
  }

}
