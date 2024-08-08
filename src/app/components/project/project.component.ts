import { Component, EventEmitter, Output } from '@angular/core';
import { Project } from 'src/app/shared/classes/project';
import { _ProjectService } from 'src/app/shared/services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {

  listProjects: Project[] = []
  
  constructor(private _projectService:_ProjectService){
  }

  ngOnInit():void{
    this.getListProject()
  }

  getListProject(){
    this._projectService.getListProjects().subscribe((data) => {
      this.listProjects = data
    })
    console.log(this.listProjects.length)
  }

}
