import { Component } from '@angular/core';

@Component({
  selector: 'app-family-info',
  templateUrl: './family-info.component.html',
  styleUrls: ['./family-info.component.css']
})
export class FamilyInfoComponent {
  myFamilyTitle = "¡Mi Familia!";
  momFirstName = "Blanca Ruth";
  momField = "Mi mamá";
  dadFirstName = "Raymundo Jacobo";
  dadField = "Mi papá";
  petsName = "Toby & Daisy";
  petsField = "Mis mascotas";
}
