import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-week-weather',
  templateUrl: './week-weather.component.html',
  styleUrls: ['./week-weather.component.css']
})
export class WeekWeatherComponent implements OnInit {
  Temperature_sat= 19
  Temperature_sun= 21
  Temperature_mon= 25
  Temperature_tue= 20
  Temperature_wed= 17
  Temperature_thu= 15
  Temperature_Fri= 19
  
  constructor() { }

  ngOnInit(): void {
  }

}
