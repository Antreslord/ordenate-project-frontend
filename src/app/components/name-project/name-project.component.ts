import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-name-project',
  templateUrl: './name-project.component.html',
  styleUrls: ['./name-project.component.css']
})
export class NameProjectComponent {

  @Output() cancelProject:EventEmitter<boolean>; 

  
  constructor(){
    this.cancelProject = new EventEmitter();
  }

  hiddenWindowNewProject(){
    this.cancelProject.emit(false)
  }


}
