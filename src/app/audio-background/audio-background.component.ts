import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audio-background',
  templateUrl: './audio-background.component.html',
  styleUrls: ['./audio-background.component.css']
})
export class AudioBackgroundComponent implements OnInit {

  audio = new Audio();
  playPromise:Promise<void> = new Promise<void>((_resolve, _reject) => {
  })

  constructor() { }

  ngOnInit(): void {
  }

  turnMusicOn() {
    this.playPromise = this.audio.play();
    console.log(`On() - Now playing!!!`)
  }

  turnMusicOff() {
    if (this.playPromise !== undefined) {
      console.log(`Off() - Music was paused >:(`)
      this.playPromise.then(_ => {
        this.audio.pause();
      })
      .catch(error => {
        console.log(`Error: ${ error } `)
      })
    }
  }

  playAudio() {
    this.audio.src = "../../assets/audio-backg/SweetChildOMine_4wp.mp3";
    this.audio.load();
    this.playPromise = this.audio.play();
    console.log(`playAudio() - Music starts!!!`)
    this.audio.addEventListener('ended', function() {
      this.currentTime = 0;
      this.play();
    }, false);
  }
}
