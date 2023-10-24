import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AudioBackgroundComponent } from '../audio-background/audio-background.component'
import { WelcomeInfoComponent } from '../welcome-info/welcome-info.component';

@Component({
  selector: 'app-welcome-dialog',
  templateUrl: './welcome-dialog.component.html',
  styleUrls: ['./welcome-dialog.component.css']
})
export class WelcomeDialogComponent implements OnInit {

  showOn:boolean = true;
  showOff:boolean = false;

  constructor(public welcomeDialog: MatDialog,
    public audio: AudioBackgroundComponent) { }
  
  ngOnInit(): void {
    this.openDialog();
  }

  openDialog() {
    const dialog = this.welcomeDialog.open(WelcomeInfoComponent, {
      height: 'auto',
      width: 'auto',
      disableClose: true,
      autoFocus: true
    });
    dialog.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${ result }`);
      this.audio.playAudio();
    })
  }

  wMusicOn() {
    this.showOn = true;
    this.showOff = false;
    this.audio.turnMusicOn();
  }

  wMusicOff() {
    this.showOff = true;
    this.showOn = false;
    this.audio.turnMusicOff();
  }
}
