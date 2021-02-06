import { Component, OnInit } from '@angular/core';

// ***************** Full Calender ********************
import { CalendarOptions } from '@fullcalendar/angular'; 

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  currentCity =""
  currentTemperature =0
  currentHumadity =0
  currentWindSpeed=0
  constructor() { }

  ngOnInit(): void {
    window.addEventListener("beforeunload", function (e) {
      // var confirmationMessage = "\o/";
      // console.log("cond");
      // e.returnValue = confirmationMessage;     // Gecko, Trident, Chrome 34+
      // return confirmationMessage;              // Gecko, WebKit, Chrome <34
  });

  }
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth'
  };
  
  getCity (cityName)
  {
    console.warn(cityName)
    this.currentCity= cityName
  }
  async infoSearch (cityName)
  {
    for (let i=0;i<this.weatherDate.length; i++)
    {
      if (this.weatherDate[i].city==cityName)
      {
        this.currentCity=cityName
        this.currentTemperature=this.weatherDate[i].temperature
        this.currentWindSpeed = this.weatherDate[i].windspeed
        this.currentHumadity = this.weatherDate[i].humadity
      }

    }
  }
  weatherDate :weatherInfo[] = [
    {
      city :"Cairo",
      temperature : 35,
      humadity: 20,
      windspeed :10

    } ,
    {
      city :"Cairo",
      temperature : 35,
      humadity: 20,
      windspeed :10

    } ,
    {
      city :"Cairo",
      temperature : 35,
      humadity: 20,
      windspeed :10

    } ,
    {
      city :"Cairo",
      temperature : 35,
      humadity: 20,
      windspeed :10

    } ,
    
  ]
}
interface weatherInfo
{
  city :string
  temperature: number;
  humadity: number;
  windspeed :number;
}
