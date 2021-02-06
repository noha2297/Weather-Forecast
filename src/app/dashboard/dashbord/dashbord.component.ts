import { WeekWeatherComponent } from './../../week-weather/week-weather.component';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  currentCity =""
  currentTemperature =0
  currentHumadity =0
  currentWindSpeed=0

  weatherDate:any=[

  ]

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("assets/data.json").subscribe((res:any)=>{
      this.weatherDate= res.data;
      console.log(res);
    })
  }

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
}
