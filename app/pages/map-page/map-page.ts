import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Platform} from 'ionic-angular';

/*
  Generated class for the MapPagePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/map-page/map-page.html',
})
export class MapPage {
  map:any;

  constructor(private platform: Platform) {
      this.platform = platform;
      this.initializeMap();
  }

  initializeMap() {
    this.platform.ready().then(() => {
      var minZoomLevel = 12;

      this.map = new google.maps.Map(document.getElementById('map_canvas'), {
               zoom: minZoomLevel,
               center: new google.maps.LatLng(38.50, -90.50),
               mapTypeId: google.maps.MapTypeId.ROADMAP
           });
    });
  }

}
