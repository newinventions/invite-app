import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-mass-map',
  templateUrl: './mass-map.component.html',
  styleUrls: ['./mass-map.component.css']
})
export class MassMapComponent implements OnInit {
  gApiKey:string = "AIzaSyDRihSvKYDRvwmM-10dxby74ULY6prodgw";
  title:string = "Ceremonia Religiosa";
  church:string = "Parroquia";
  when:string = "Cuándo:";
  whenData:string = "20 de Enero de 2024, 5:00 p.m.";
  where:string = "Dirección:";
  whereData:string = "Río Atoyac 5912, Jardines de San Manuel, C.P. 72570, Heroica Puebla de Zaragoza, Pue.";
  closeButton:string = "CERRAR";
  link:string = "<a href=\"https://www.google.com/maps/place/RECEPCIONES+MARIEL/@19.0101004,-98.2052236,18z/data=!4m14!1m7!3m6!1s0x85cfc0a6ca2efa57:0xf35953abea88fadf!2sRECEPCIONES+MARIEL!8m2!3d19.0100199!4d-98.2051372!16s%2Fg%2F1ptv_v2rk!3m5!1s0x85cfc0a6ca2efa57:0xf35953abea88fadf!8m2!3d19.0100199!4d-98.2051372!16s%2Fg%2F1ptv_v2rk?entry=ttu\" target=\"_blank\" style=\"font-size:10px;\" >Abrir en Google Maps</a>"
  private map!: google.maps.Map;

  constructor() { }

  ngOnInit(): void {
    this.initMassMap();
  }

  // Initialize and add the map
  initMassMap(): void {
    // load the map
    let loader = new Loader({
      apiKey: this.gApiKey
    });
    // The location of Monasterio
    const monasterio = { lat: 19.0179712, lng: -98.2197946 };
    loader.importLibrary('maps').then(() => {
      console.log('mass map loaded');
      // The map, centered at Monasterio
      this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        zoom: 16,
        center: monasterio,
        streetViewControl: false,
        fullscreenControl: false,
        mapTypeControl: false,
      });
      // The marker, positioned at Monasterio
      const marker = new google.maps.Marker({
        position: monasterio,
        map: this.map,
      });
      // the info window
      const infowindow = new google.maps.InfoWindow({
        content: "<h4 style=\"font-size:12px; line-height: 0.9;\">" + this.church + "</h4><p style=\"font-size:10px; line-height: 0.9;\">" + this.whereData + "</p>" + this.link,
        minWidth: 190,
      });
      google.maps.event.addListener(marker, "click", () => {
        infowindow.open(this.map, marker);
      });
    });
  }
}
