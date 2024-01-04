import { Component, OnInit } from '@angular/core';
import { CountdownTimerComponent } from 'projects/countdown-timer/src/lib/countdown-timer.component';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.css']
})
export class MainInfoComponent implements OnInit {

  miHostName = "Ruth"
  miEventName = "40";
  miDays = "Días";
  miHours = "Horas";
  miMinutes = "Minutos";
  miSeconds = "Segundos";
  message: string = "";

  constructor(public timer: CountdownTimerComponent) { }

  ngOnInit(): void {
    // Initialize time with 0
    this.timer.time = {
      days: 0, hours: 0, minutes: 0, seconds: 0
    };
    // Now, set the finishDate  in string format YYYY-MM-dd HH:mm:ss
    this.timer.finishDate = new Date('2024-01-20 17:00:00');

    //this.start().subscribe(_ => console.log("tik"))
    let counterTimer$ = this.timer.start().subscribe((_) => {
      if ((this.timer.time.days == -1) && (this.timer.time.hours >= 12)) {
        this.timer.time = {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        }
        this.message = "¡Disfruta de esta fiesta conmigo!";
      } else if ((this.timer.time.days == -1) && (this.timer.time.hours < 12)) {
        this.timer.time = {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        }
        this.message = "¡Fue una gran fiesta! Descansemos por hoy.";
      } else if (this.timer.time.days < -1) {
        this.timer.time = {
          days: -2,
          hours: 0,
          minutes: 0,
          seconds: 0
        }
        this.message = "¡Gracias por acompañarme! Espero que hayas disfrutado estos momentos conmigo.";
        counterTimer$.unsubscribe();
      }
    });
  }
}
