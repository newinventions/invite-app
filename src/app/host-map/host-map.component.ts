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
  hosting:string = "Salón 'Geli', Eventos Sociales";
  when:string = "Cuándo:";
  whenData:string = "1º de Abril de 2023, 1:30 p.m.";
  where:string = "Dirección:";
  whereData:string = "Blvd. Los Pilares #2212, Col. Los Pilares, C.P. 72560, Puebla, Pue.";
  closeButton:string = "CERRAR";
  link:string = "<a href=\"https://www.google.com.mx/maps/place/Geli+-+Eventos+Sociales/@19.0172401,-98.1966966,17z/data=!3m1!4b1!4m5!3m4!1s0x85cfc099f038fd9b:0x7ceec2d4c61f769a!8m2!3d19.0171806!4d-98.1945242\" target=\"_blank\" style=\"font-size:10px;\" >Abrir en Google Maps</a>"
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
    // The location of Monasterio
    const salonGeli = { lat: 19.0171806, lng: -98.1945242 };
    loader.importLibrary('maps').then(() => {
      console.log('hosting map loaded');
      // The map, centered at Monasterio
      this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        zoom: 16,
        center: salonGeli,
        streetViewControl: false,
        fullscreenControl: false,
        mapTypeControl: false,
      });
      // The marker, positioned at Monasterio
      const marker = new google.maps.Marker({
        position: salonGeli,
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
