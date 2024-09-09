import { Component, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Activity } from 'src/app/shared/interfaces/activity';
import { _ActivityService } from 'src/app/shared/services/activity.service';
import { _ObservablesConnectionService } from 'src/app/shared/services/observables-connection.service';

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

  private subscriptionItemsMenu : Subscription
  

  @Output() sendItemsActive:EventEmitter<boolean>
  @Output() sendItemsPropertyActive:EventEmitter<boolean>
  @Output() sendPositionWindowProperties:EventEmitter<string>

  constructor(private _observableService: _ObservablesConnectionService, private _activityService:_ActivityService){
    this.sendItemsActive = new EventEmitter()
    this.sendItemsPropertyActive = new EventEmitter()
    this.sendPositionWindowProperties = new EventEmitter()
    
    this.subscriptionItemsMenu = this._observableService.getObject().subscribe((data) => {
      this.auxItem = data 
      const { nameItem, valueItem } = this.auxItem
      if(nameItem in this.items){
        this.items[nameItem] = valueItem
      }   
    })

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

  getListProjects(){
    this._activityService.getListActivities().subscribe((data) => {
      this.listActivities = data
    })
  }

}
