import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-host-map',
  templateUrl: './host-map.component.html',
  styleUrls: ['./host-map.component.css']
})
export class HostMapComponent implements OnInit {
  gApiKey:string = "AIzaSyDRihSvKYDRvwmM-10dxby74ULY6prodgw";
  title:string = "Recepción";
  hosting:string = "Recepciones Mariel";
  when:string = "Cuándo:";
  whenData:string = "20 de Enero de 2024, 5:00 p.m.";
  where:string = "Dirección:";
  whereData:string = "Río Atoyac 5912, Jardines de San Manuel, C.P. 72570, Heroica Puebla de Zaragoza, Pue.";
  closeButton:string = "CERRAR";
  link:string = "<a href=\"https://www.google.com/maps/place/RECEPCIONES+MARIEL/@19.0101004,-98.2052236,18z/data=!4m14!1m7!3m6!1s0x85cfc0a6ca2efa57:0xf35953abea88fadf!2sRECEPCIONES+MARIEL!8m2!3d19.0100199!4d-98.2051372!16s%2Fg%2F1ptv_v2rk!3m5!1s0x85cfc0a6ca2efa57:0xf35953abea88fadf!8m2!3d19.0100199!4d-98.2051372!16s%2Fg%2F1ptv_v2rk?entry=ttu\" target=\"_blank\" style=\"font-size:10px;\" >Abrir en Google Maps</a>"
  url:string = "https://www.google.com/maps/place/RECEPCIONES+MARIEL/@19.0101004,-98.2052236,18z/data=!4m14!1m7!3m6!1s0x85cfc0a6ca2efa57:0xf35953abea88fadf!2sRECEPCIONES+MARIEL!8m2!3d19.0100199!4d-98.2051372!16s%2Fg%2F1ptv_v2rk!3m5!1s0x85cfc0a6ca2efa57:0xf35953abea88fadf!8m2!3d19.0100199!4d-98.2051372!16s%2Fg%2F1ptv_v2rk?entry=ttu";
  name:string = "Abrir en Google Maps";
  private map!: google.maps.Map;  

  constructor() { }

  ngOnInit(): void {
    this.initHostingMap();
  }

  // Initialize and add the map
  initHostingMap(): void {
    // load the map
    let loader = new Loader({
      apiKey: this.gApiKey
    });
    // The location of hosting place
    const hostingPlace = { lat: 19.0101004, lng: -98.2052236 };
    loader.importLibrary('maps').then(() => {
      console.log('hosting map loaded');
      // The map, centered at hosting place
      this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        zoom: 16,
        center: hostingPlace,
        streetViewControl: false,
        fullscreenControl: false,
        mapTypeControl: false,
      });
      // The marker, positioned at hosting place
      const marker = new google.maps.Marker({
        position: hostingPlace,
        map: this.map,
      });
      // the info window
      const infowindow = new google.maps.InfoWindow({
        content: "<h4 style=\"font-size:12px; line-height: 0.9;\">" + this.hosting + "</h4><p style=\"font-size:10px; line-height: 0.9;\">" + this.whereData + "</p>" + this.link,
        minWidth: 190,
      });
      google.maps.event.addListener(marker, "click", () => {
        infowindow.open(this.map, marker);
      });
    });
  }
}
