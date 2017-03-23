import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lat: number = 42.858217;
  lng: number = -70.929990;
  // zoom
  zoom: number = 10;
  // Markers
  markers: marker[] = [
    {
      name: 'Company One',
      lat: 42.825588,
      lng: -71.018029,
      draggable: true
    },
    {
      name: 'Company two',
      lat: 42.868164,
      lng: -70.889071,
      draggable: true
    },
    {
      name: 'Company Three',
      lat: 42.858279,
      lng: -70.930498,
      draggable: false
    }
  ];

  markerName: string;
  markerLat:string;
  markerLng:string;
  markerDraggable:string;

  constructor() {

  }

  mapClicked($event: any) {
    console.log('Map Clicked');
    var newMarker = {
      name: 'Untitled',
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: false
    }
    this.markers.push(newMarker);
  }
  markerDragEnd(marker: any, $event: any) {
    console.log('DragEnd ', marker, $event);

    var updMarker = {
      name: marker.name,
      lat: parseFloat(marker.lat),
      lng: parseFloat(marker.lng),
      draggable: false
    }
    var newLat = $event.coords.lat;
    var newLng = $event.coords.lng;

  }
  clickedMarker(marker: marker, index: number) {
    console.log('clicked marker ' + marker.name + ' at index: ' + index);
  }

  addMarker(){
    console.log('adding new marker');
    if(this.markerDraggable == 'yes'){
      var isDraggable = true;
    }else{
      var isDraggable = false;

    }
    var newMarker = {
      name:this.markerName,
      lat: parseFloat(this.markerLat),
      lng: parseFloat(this.markerLng),
      draggable: isDraggable
    }

    this.markers.push(newMarker);

  }
}

// Marker Type
interface marker {
  name?: string;
  lat: number;
  lng: number;
  draggable: boolean;
}
