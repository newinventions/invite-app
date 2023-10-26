import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  amWhereWhen:string = "Dónde & Cuándo";
  amPhotos:string = "Mis Fotos";
  amFamily:string = "Mi Familia";
  amVideo:string = "Ver Video";
  amMessage:string = "Mensaje";
}
