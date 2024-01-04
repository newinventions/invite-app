import { Component } from '@angular/core';

@Component({
  selector: 'app-family-info',
  templateUrl: './family-info.component.html',
  styleUrls: ['./family-info.component.css']
})
export class FamilyInfoComponent {
  myFamilyTitle = "¡Mi Familia!";
  relative1FirstName = "Raymundo Jacobo";
  relative1Field = "- Mi esposo -";
  relative2FirstName = "Yeshua";
  relative2Field = "- Mi hijo -";
  petsName = "Toby & Daisy";
  petsField = "- Mis mascotas -";
}
