import { Component, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Activity } from 'src/app/shared/interfaces/activity';
import { Project } from 'src/app/shared/interfaces/project';
import { _ActivityService } from 'src/app/shared/services/activity.service';
import { _ObservablesConnectionService } from 'src/app/shared/services/observables-connection.service';
import { projectChose } from 'src/app/shared/services/project_chose.service';

@Component({
  selector: 'app-table-area',
  templateUrl: './table-area.component.html',
  styleUrls: ['./table-area.component.css']
})
export class TableAreaComponent {

  items:any = {
    responsibleSuject: true,
    priority: true,
    state: true,
    date: true,
    schedule: false,  //cronograma
    number: false,
    label: false,
    text: false,
    selectable: false, //seleccionable
    docs: false,
    url: false,
    relationship: false //relacion
  }

  auxItem:any = {}

  listActivities:Activity[] = []

  numberProject:number = 0; 

  private subscriptionObservableService: Subscription = new Subscription();
  

  @Output() sendItemsActive:EventEmitter<boolean>
  @Output() sendItemsPropertyActive:EventEmitter<boolean>
  @Output() sendPositionWindowProperties:EventEmitter<string>

  constructor(
    private _observableService: _ObservablesConnectionService,
    private _activityService:_ActivityService,
    private _projectChoseService: projectChose,
    private _toastr:ToastrService
  )
    {
    this.sendItemsActive = new EventEmitter()
    this.sendItemsPropertyActive = new EventEmitter()
    this.sendPositionWindowProperties = new EventEmitter()

    this.showItemChose()

    this.getListProjects()
  }

  sendSignalMenuItems(){
    this.sendItemsActive.emit(true)
  }

  showPropertiesItems(event:MouseEvent, name:string):void{
    const posX = event.clientX - 250
    const aux:string = 'translate('+posX+'px,50px)'
    this._observableService.setString(name)
    this.sendPositionWindowProperties.emit(aux)
    this.sendItemsPropertyActive.emit(true)
  }

  showItemChose(){

    this.subscriptionObservableService.add(this._observableService.getObject().subscribe((data)=>{
      this.auxItem = data 
      const { nameItem, valueItem } = this.auxItem
      if(nameItem in this.items){
        this.items[nameItem] = valueItem
      }   
    }))
  }

  getListProjects(){
    this.subscriptionObservableService.add(this._projectChoseService.getInfoProject().subscribe((data) => {
      const project:any = data; 
      localStorage.setItem('id_project',project.id)
      this._activityService.getListActivitiesByUserAndProject(project.id).subscribe((dataProject)=>{
        this.listActivities = dataProject
      })
    }))
  }

  addNewActivity(){

    const idUser:any = localStorage.getItem('user')
    const idUserJSON = JSON.parse(idUser)
    const idProject = Number(localStorage.getItem('id_project'))

    
    const newActivity:Activity = {
      id_user: idUserJSON.id,
      id_project: idProject
    }

    this._activityService.saveActivity(newActivity).subscribe(()=>{
      this._toastr.success('La actividad se ha añadido correctamente', 'Actividad Agregada')
    })
  }

}
