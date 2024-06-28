import { Component } from '@angular/core';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent {

  constructor(){}

  clickLogin:boolean = false;

  showLogin(){
    this.clickLogin = true;
  }

  hiddenLoging(){
    if(this.clickLogin){
      this.clickLogin=false;
    }
  }


}
