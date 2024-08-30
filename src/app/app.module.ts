import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LobbyComponent } from './components/lobby/lobby.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectComponent } from './components/project/project.component';
import { NameProjectComponent } from './components/name-project/name-project.component';
import { SettingsComponent } from './components/settings/settings.component';
import { FormsModule } from '@angular/forms';
import { WorkTeamsComponent } from './components/work-teams/work-teams.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { TrashComponent } from './components/trash/trash.component';
import { ProjectAreaComponent } from './components/project-area/project-area.component';
import { HttpClientModule } from '@angular/common/http';
import { TableAreaComponent } from './components/z-others/table-area/table-area.component';
import { ItemsTableComponent } from './components/z-others/items-table/items-table.component';
import { PropertyItemsComponent } from './components/z-others/property-items/property-items.component';

@NgModule({
  declarations: [
    AppComponent,
    LobbyComponent,
    LoginComponent,
    DashboardComponent,
    ProjectComponent,
    NameProjectComponent,
    SettingsComponent,
    WorkTeamsComponent,
    CalendarComponent,
    TrashComponent,
    ProjectAreaComponent,
    TableAreaComponent,
    ItemsTableComponent,
    PropertyItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FullCalendarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
