import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  currentCity=" Cairo"
  currentMaxTemperature =20
  currentMinTemperature =5
  currentHumadity =30
  currentWindSpeed=2.2
  
  
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
        this.currentMaxTemperature=this.weatherDate[i].temperature
        this.currentWindSpeed = this.weatherDate[i].windspeed
        this.currentHumadity = this.weatherDate[i].humadity
      }

    }
  }
}
