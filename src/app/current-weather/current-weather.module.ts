import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapComponent } from './google-map/google-map.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';


import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [GoogleMapComponent, CurrentWeatherComponent],
  imports: [
    CommonModule ,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw'//'AIzaSyAvcDy5ZYc2ujcs6TTtI3RYX5QmuoV8Ffw'//'AIzaSyCtdPrTdRpsOi-YhrXAIj42RIoQm-rVszU'
    })
  ],
  exports:[
    CurrentWeatherComponent
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class CurrentWeatherModule { }
