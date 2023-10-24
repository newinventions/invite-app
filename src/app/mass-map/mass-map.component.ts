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
  church:string = "Parroquia 'María Reina de la Paz'";
  when:string = "Cuándo:";
  whenData:string = "1º de Abril de 2023, 11 a.m.";
  where:string = "Dirección:";
  whereData:string = "5 B Sur y 59 Poniente S/N, Col. Villa Encantada, C.P. 72330, Puebla, Pue.";
  closeButton:string = "CERRAR";
  link:string = "<a href=\"https://www.google.com.mx/maps/place/Parroquia+%22Mar%C3%ADa+Reina+de+la+paz%22/@19.0182008,-98.2284936,15z/data=!4m14!1m7!3m6!1s0x85cfc0b293e893c5:0x41fef9eaa345216b!2sParroquia+%22Mar%C3%ADa+Reina+de+la+paz%22!8m2!3d19.0182008!4d-98.2197389!16s%2Fg%2F1ptylvz1q!3m5!1s0x85cfc0b293e893c5:0x41fef9eaa345216b!8m2!3d19.0182008!4d-98.2197389!16s%2Fg%2F1ptylvz1q\" target=\"_blank\" style=\"font-size:10px;\" >Abrir en Google Maps</a>"
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
