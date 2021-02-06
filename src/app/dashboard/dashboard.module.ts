import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbordComponent } from './dashbord/dashbord.component';
import { CalendarComponent } from './calendar/calendar.component';



import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/************************ Full Calender ************************/
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid';


FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
]);
 /**************************************************************/

@NgModule({
  declarations: [DashbordComponent, CalendarComponent],
  imports: [
    CommonModule ,
    FullCalendarModule,

  ],
  exports:[
    DashbordComponent
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class DashboardModule { }
