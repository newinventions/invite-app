import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalendarOptions, GoogleCalendar, ICalendar, OutlookCalendar, YahooCalendar } from 'datebook';
import { MassMapComponent } from '../mass-map/mass-map.component';
import { HostMapComponent } from '../host-map/host-map.component';
import FileSaver from 'file-saver';

@Component({
  selector: 'app-where-when-info',
  templateUrl: './where-when-info.component.html',
  styleUrls: ['./where-when-info.component.css'],
  host: {
    '(document:click)': 'onMouseClick($event)'
  }
})
export class WhereWhenInfoComponent implements OnInit {
  wwInfoTitle:string = "Dónde & Cuándo"
  churchTitle:string = "Ceremonia Religiosa";
  churchName:string = "Parroquia";
  churchWhen:string = "20 de Enero de 2024, 5:00 p.m.";
  churchWhere:string = "Río Atoyac 5912, Jardines de San Manuel, C.P. 72570, Heroica Puebla de Zaragoza, Pue.";
  hostTitle:string = "Recepción";
  hostingName:string = "Recepciones Mariel";
  hostWhere:string = "Río Atoyac 5912, Jardines de San Manuel, C.P. 72570, Heroica Puebla de Zaragoza, Pue.";
  hostWhen:string = "20 de Enero de 2024, 5:00 p.m.";
  when:string = "Cuándo:";
  where:string = "Dirección:";
  mapButton:string = "Ver mapa";
  calButton:string = "Agendar en el calendario";
  massConfig: CalendarOptions = {
    title: 'Ruth: ' + this.churchTitle,
    description: 'Misa de acción de gracias de 40 años de Ruth.',
    location: this.churchName + ', ' + this.churchWhere,
    start: new Date('2024-01-20T17:00:00'),
    end: new Date('2024-01-20T22:00:00'),
  };
  hostConfig: CalendarOptions = {
    title: 'Ruth: ' + this.hostTitle,
    description: 'Fiesta de Cumpleaños de Blanca Ruth',
    location: this.hostingName + ', ' + this.hostWhere,
    start: new Date('2024-01-20T17:00:00'),
    end: new Date('2024-01-20T22:00:00'),
  };
  op1:string = "Outlook";
  op2:string = "Google";
  op3:string = "Yahoo";
  online:string = "(online)";

  constructor(public massDialog: MatDialog, public hostDialog: MatDialog) { }
  ngOnInit(): void {
  }

  openMassDialog() {
    const dialog = this.massDialog.open(MassMapComponent, {
      height: 'auto',
      width: 'auto'
    });
    dialog.afterClosed().subscribe( res => {
      console.log(`Dialog result: ${ res }`)
    })
  }

  openHostDialog() {
    const dialog = this.hostDialog.open(HostMapComponent, {
      height: 'auto',
      width: 'auto'
    });
    dialog.afterClosed().subscribe( res => {
      console.log(`Dialog result: ${ res }`)
    })
  }

  onMouseClick(ev: MouseEvent) {
    if (ev.target != null) {
      var content = (ev.target as HTMLElement).textContent;
      if (content?.trim() == 'Dónde & Cuándo') {
        (document.getElementById('whereWhenInfo') as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
      } else if (content?.trim() == 'Mis Fotos') {
        (document.getElementById('photoSection') as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
      } else if (content?.trim() == 'Mi Familia') {
        (document.getElementById('familyInfo') as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
      } else if (content?.trim() == 'Ver Video') {
        (document.getElementById('videoSection') as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
      } else if (content?.trim() == 'Mensaje') {
        (document.getElementById('endingInfo') as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
      } else if (content?.trim() != this.calButton) {
        // console.log("calButton=" + content);
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
  }

  getMassICSFile() {
    const icalendar = new ICalendar(this.massConfig);
    const blob = new Blob([icalendar.render()], {
      type: 'text/calendar'
    })
    FileSaver.saveAs(blob, 'ruth-40.ics');
  }

  getMassGoogleLink():string {
    const googleCal = new GoogleCalendar(this.massConfig);
    return googleCal.render();
  }

  getMassOutlookLink():string {
    const outlookCal = new OutlookCalendar(this.massConfig);
    return outlookCal.render();
  }

  getMassYahooLink():string {
    const yahooCal = new YahooCalendar(this.massConfig);
    yahooCal.setParam('in_st', 'Río Atoyac 5912, Jardines de San Manuel')
    .setParam('in_csz', 'Heroica Puebla de Zaragoza, Pue., 72570');
    return yahooCal.render();
  }

  showMassMenu() {
    document.getElementById("massDropdown")?.classList.toggle("show");
  }

  getHostingICSFile() {
    const icalendar = new ICalendar(this.hostConfig);
    const blob = new Blob([icalendar.render()], {
      type: 'text/calendar'
    })
    FileSaver.saveAs(blob, 'ruth-hosting.ics');
  }

  getHostingGoogleLink():string {
    const googleCal = new GoogleCalendar(this.hostConfig);
    return googleCal.render();
  }

  getHostingOutlookLink():string {
    const outlookCal = new OutlookCalendar(this.hostConfig);
    return outlookCal.render();
  }

  getHostingYahooLink():string {
    const yahooCal = new YahooCalendar(this.hostConfig);
    yahooCal.setParam('in_st', 'Río Atoyac 5912, Jardines de San Manuel')
    .setParam('in_csz', 'Heroica Puebla de Zaragoza, Pue., 72570');
    return yahooCal.render();
  }

  showHostingMenu() {
    document.getElementById("hostingDropdown")?.classList.toggle("show");
  }
}
