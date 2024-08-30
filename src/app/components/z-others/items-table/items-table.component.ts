import { Component, EventEmitter, Output } from '@angular/core';
import { _ObservablesConnectionService } from 'src/app/shared/services/observables-connection.service';

@Component({
  selector: 'app-items-table',
  templateUrl: './items-table.component.html',
  styleUrls: ['./items-table.component.css']
})
export class ItemsTableComponent {

  @Output() closeMenuItems:EventEmitter<boolean>

  constructor(private _stringObservable: _ObservablesConnectionService){
    this.closeMenuItems = new EventEmitter()
  }

  itemChose(value:string){
    this.closeMenuItems.emit(false)
    this._stringObservable.setString(value)
  }

}
