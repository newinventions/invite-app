import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-video-section',
  templateUrl: './video-section.component.html',
  styleUrls: ['./video-section.component.css']
})
export class VideoSectionComponent {
  videoTitle = "Ver video";
  @Output()
  videoSender = new EventEmitter<string>();

  sendVideo() {
    this.videoSender.emit(this.videoTitle);
  }
}