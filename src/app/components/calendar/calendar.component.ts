import { Component } from '@angular/core';
import { CalendarOptions, Calendar } from '@fullcalendar/core';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { eventCalendar } from 'src/app/interfaces/eventsCalendar';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {

  windowAddEvents:boolean = true

  title:string = ''
  date:any = ''
  isAllDay:boolean = false
  end:any = ''
  priority:string = ''

  eventsCalendar:any = [
    { title: 'event 1', date: '2024-06-21', allDay:true, backgroundColor:'blue', start:'2024-06-20', end:'2024-06-22' },
    { title: 'event 2', date: '2024-06-19', allDay:false, backgroundColor:'green' },
    


    //{ title: 'event 3', daysOfWeek: [1,2] }
    
  ]

  calendarOptions: CalendarOptions = {

    //Mostrar grilla con los días / Linea de Tiempo.
    initialView: 'dayGridMonth',//dayGridMonth, timeGridWeek
    plugins: [timeGridPlugin, dayGridPlugin , interactionPlugin],

    //header para timeGrid
    /*headerToolbar: {
      left: 'prev,next',
      center: 'title',
      right: 'timeGridWeek,timeGridDay' // user can switch between the two
    },*/

    selectable:true,

    selectMirror: true,

    events: this.eventsCalendar,

    //mostrar fines de semana = daygrid
    weekends: false, // initial value
    
    //ejecutar evento al hacer click
    dateClick:(arg) => this.handleDateClick(arg),

  }

  handleDateClick(arg: any) {
    this.windowAddEvents = true
    this.title = 'titulo'
    this.date = arg.dateStr
    this.end = arg.dateStr
    this.isAllDay = true
    this.priority = ''
  }

  addEvent(){
    const newEvent:eventCalendar = { title: this.title, date: this.date, start:this.date, end: this.end, isAllDay: this.isAllDay, backgroundColor:this.priority};

    this.eventsCalendar = [...this.eventsCalendar, newEvent ];
    
    console.log(this.eventsCalendar)

    this.calendarOptions.events = this.eventsCalendar

    this.windowAddEvents = false
  }

}
