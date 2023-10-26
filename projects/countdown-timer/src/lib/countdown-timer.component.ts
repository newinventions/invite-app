import { Component, Input, OnInit } from '@angular/core';
import { interval } from 'rxjs/internal/observable/interval';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'ctimer-countdown-timer',
  template: `
  `,
  styles: [
  ]
})
export class CountdownTimerComponent implements OnInit {

  time!: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };

  @Input() finishDateString: string = '';
  finishDate: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  updateTime() {
    const now = new Date();
    const diff = this.finishDate.getTime() - now.getTime();
    //console.log(diff);

    // Calculate the time to reach the goal time (finishDate)
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor(diff / (1000 * 60));
    const secs = Math.floor(diff / 1000);
    // The rest will be shown as result
    this.time.days = days;
    this.time.hours = hours - days * 24;
    this.time.minutes = mins - hours * 60;
    this.time.seconds = secs - mins * 60;
  }

  // This must be executed each second
  start() {
    return interval(1000).pipe(
      map((x: number) => {
        this.updateTime();
        return x;
      })
    );
  }
}
