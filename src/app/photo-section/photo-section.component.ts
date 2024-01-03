import { Component } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-photo-section',
  templateUrl: './photo-section.component.html',
  styleUrls: ['./photo-section.component.css']
})
export class PhotoSectionComponent {

  psTitle:string = "Mis fotos";

  slideStore = [
    { id: "1", src: "../../assets/photo-section/p01.jpg", },
    { id: "2", src: "../../assets/photo-section/p02.jpg", },
    { id: "3", src: '../../assets/photo-section/p03.jpg', },
    { id: "4", src: '../../assets/photo-section/p04.jpg', },
    { id: "5", src: '../../assets/photo-section/p05.jpg', },
    { id: "6", src: '../../assets/photo-section/p06Low.jpg', },
    { id: "7", src: '../../assets/photo-section/p07Low.jpg', },
    { id: "8", src: '../../assets/photo-section/p08Low.jpg', }, 
    { id: "9", src: '../../assets/photo-section/p09Low.jpg', },
    { id: "10", src: '../../assets/photo-section/p10.jpg', }
  ];

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplaySpeed: 1000,
    mouseDrag: true,
    touchDrag: true,
    dragEndSpeed: 650,
    pullDrag: false,
    dots: true,
    dotsSpeed: 1000,
    nav: false,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
    center: true,
    autoHeight: true,
    autoWidth: true,
    slideTransition: 'linear',
  };
  activeSlides!: SlidesOutputData;

  constructor() { }

  getPassedData(data: SlidesOutputData) {
    this.activeSlides = data;
  }
}
