import { Component, OnInit } from '@angular/core';

// ***************** Full Calender ********************
import { CalendarOptions } from '@fullcalendar/angular'; 

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

 
  constructor() { }

  ngOnInit(): void {
  }

calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth'
  };
  
}