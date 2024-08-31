import { Component, EventEmitter, Output } from '@angular/core';
import { _ObservablesConnectionService } from 'src/app/shared/services/observables-connection.service';

@Component({
  selector: 'app-property-items',
  templateUrl: './property-items.component.html',
  styleUrls: ['./property-items.component.css']
})
export class PropertyItemsComponent {

  @Output() closePropertyItem:EventEmitter<boolean>;
  item:string = '';

  constructor(private _observableService:_ObservablesConnectionService){
    this.closePropertyItem = new EventEmitter()
    this._observableService.getString().subscribe((data) => {
      this.item = data
    })
  }

  hideItem(item:string, value:boolean){
    this._observableService.setObject(item,value)
    this.closePropertyItem.emit(false)
  }

}
