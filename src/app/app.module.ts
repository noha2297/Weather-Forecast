import { AppRoutingModule } from './app-routing.module';
import { CurrentWeatherModule } from './current-weather/current-weather.module';
import { DashboardModule } from './dashboard/dashboard.module';

import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/************************ Full Calender ************************/
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid';

import { HttpClientModule } from '@angular/common/http';

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { CalendarComponent } from './calendar/calendar.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { WeekWeatherComponent } from './week-weather/week-weather.component';



FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
]);
 /**************************************************************/


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    CalendarComponent,
    GoogleMapComponent,
    WeekWeatherComponent,
  ],
  imports: [
    BrowserModule ,
    DashboardModule,
    AppRoutingModule,
    HttpClientModule,
    CurrentWeatherModule,
    FullCalendarModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw'//'AIzaSyAvcDy5ZYc2ujcs6TTtI3RYX5QmuoV8Ffw'//'AIzaSyCtdPrTdRpsOi-YhrXAIj42RIoQm-rVszU'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
  
})
export class AppModule { }
