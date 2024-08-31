import { Component } from '@angular/core';

@Component({
  selector: 'app-project-area',
  templateUrl: './project-area.component.html',
  styleUrls: ['./project-area.component.css']
})
export class ProjectAreaComponent {

  menuItemsActive:boolean = false

  propertiesItemsActive:boolean = false

  getPropertiesPosition = {
    transform: ''
  }

  constructor(){}


}
