import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LobbyComponent } from './components/lobby/lobby.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectComponent } from './components/project/project.component';
import { NameProjectComponent } from './components/name-project/name-project.component';
import { SettingsComponent } from './components/settings/settings.component';
import { WorkTeamsComponent } from './components/work-teams/work-teams.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { TrashComponent } from './components/trash/trash.component';

const routes: Routes = [
  { path:'', component:LobbyComponent },
  { path:'login', component:LoginComponent },
  { path:'name-project', component:NameProjectComponent },
  { path:'dashboard', component:DashboardComponent,
    
    children:[
      { path:'projects', component:ProjectComponent },
      { path:'settings', component:SettingsComponent },
      { path:'workTeams', component:WorkTeamsComponent },
      { path:'calendar',component:CalendarComponent },
      { path:'trash', component:TrashComponent }
      
    ]
  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
