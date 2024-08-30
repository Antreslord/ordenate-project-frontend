import { Component, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
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

  propertiesPosition = {
    transform: ''
  }

  private subscriptionStringItemsMenu : Subscription
  

  @Output() sendItemsActive:EventEmitter<boolean>

  constructor(private _stringObservable: _ObservablesConnectionService){
    this.sendItemsActive = new EventEmitter()
    this.subscriptionStringItemsMenu = this._stringObservable.getString().subscribe((data) => {
      
      if(data in this.items){
        this.items[data] = true
      }
    })
  }

  sendSignalMenuItems(){
    this.sendItemsActive.emit(true)
  }

  obtenerPosicion(event:MouseEvent):void{
    const posX = event.clientX
    const posY = event.clientY
    console.log(`posicionX:${posX} y posicion Y:${posY}`)
    this.propertiesPosition.transform = 'translate('+posX+'px,'+posY+'px)'
  }

}
