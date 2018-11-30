import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { CategoryPage } from '../category/category.page';

declare var google;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  markerBounds: any;
  markers = [{ id: 1, lat: 30.786511, lng: 31.000371, icon: 'assets/images/pin_m.png' },
  { id: 2, lat: 30.788465, lng: 31.000060, icon: 'assets/images/pin_r.png' },
  { id: 3, lat: 30.793249, lng: 31.001583, icon: 'assets/images/pin_c.png' },
  { id: 4, lat: 30.793018, lng: 30.998333, icon: 'assets/images/pin_r.png' },
  { id: 5, lat: 30.795387, lng: 31.001315, icon: 'assets/images/pin_m.png' }];

  constructor(
    public geolocation: Geolocation,
    public modalCtrl: ModalController) {
    this.ionViewLoaded();
  }
  ionViewLoaded() {
    this.loadMap();
  }
  loadMap() {
    this.markerBounds = new google.maps.LatLngBounds();
    this.geolocation.getCurrentPosition().then((position) => {

      const latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      const mapOptions = {
        center: latLng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.addMarker(); // current
      this.addMarkersToMap();
    }, (err) => {
      console.log(err);
    });

  }

  addMarker() {
    const icon = {
      url: 'assets/images/pin.png', // url
      scaledSize: new google.maps.Size(40, 60), // scaled size
      origin: new google.maps.Point(0, 0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };
    const markerdata = {
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
      , icon: icon
    };
    const marker = new google.maps.Marker(markerdata);
    marker.setMap(this.map);
    this.markerBounds.extend(this.map.getCenter());
  }

  addMarkersToMap() {
    for (const item of this.markers) {
      const icon = {
        url: item.icon, // url
        scaledSize: new google.maps.Size(40, 60), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
      };

      const position = new google.maps.LatLng(item.lat, item.lng);
      const markerdata = { position: position, icon: icon, title: item.id.toString() };
      const marker = new google.maps.Marker(markerdata);
      marker.setMap(this.map);
      this.markerBounds.extend(position);
    }
    this.map.fitBounds(this.markerBounds);
    this.map.setCenter(this.markerBounds.getCenter());
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: CategoryPage
    });
    return await modal.present();
  }
}

