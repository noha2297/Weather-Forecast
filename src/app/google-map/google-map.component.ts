import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {
  currentMaxTemperature =20
  currentMinTemperature =5
  currentHumadity =30
  currentWindSpeed=2.2

  constructor() { }

  ngOnInit(): void {
    window.addEventListener("beforeunload", function (e) {
      // var confirmationMessage = "\o/";
      // console.log("cond");
      // e.returnValue = confirmationMessage;     // Gecko, Trident, Chrome 34+
      // return confirmationMessage;              // Gecko, WebKit, Chrome <34
  });
  }
  zoom: number=8;
  lat = 51.678418;
  lng = 7.809007;

  mapClicked($event :any)
  {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }
  markerDragEnd(m:marker , $event:MouseEvent)
  {
    console.log('dragEnd', m,$event);
  }
  markers:marker[]=[
    {
      lat : 51.673858,
      lng : 7.815982,
      label:'A',
      draggable:true
    },
    {
      lat : 51.373858,
      lng : 7.215982,
      label:'B',
      draggable:false
    },
    {
      lat : 51.723858,
      lng : 7.895982,
      label:'C',
      draggable:true
    }
    
  ]
}

interface marker{
  lat:number;
  lng:number;
  label?:string;
  draggable:boolean;
}
