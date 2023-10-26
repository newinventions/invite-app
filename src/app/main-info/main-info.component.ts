import { Component, OnInit } from '@angular/core';
import { CountdownTimerComponent } from 'projects/countdown-timer/src/lib/countdown-timer.component';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.css']
})
export class MainInfoComponent implements OnInit {

  miHostName = "YESHUA"
  miEventName = "¡Mis 3 años!";
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
        this.message = "¡Disfruta la fiesta junto a nosotros!";
      } else if ((this.timer.time.days == -1) && (this.timer.time.hours < 12)) {
        this.timer.time = {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        }
        this.message = "¡Fue una gran fiesta! Descansemos un poco.";
      } else if (this.timer.time.days < -1) {
        this.timer.time = {
          days: -2,
          hours: 0,
          minutes: 0,
          seconds: 0
        }
        this.message = "¡Gracias por acompañarnos! Deseamos que hayas disfrutado estos momentos con nosotros.";
        counterTimer$.unsubscribe();
      }
    });
  }
}
