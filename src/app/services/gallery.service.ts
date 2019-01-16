import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor() { }

  getImages(): any {
    const images = JSON.parse(localStorage.getItem('gallery'));
    console.log(images)
    return of(images);
  }

  getImagesForCarousel(): any {
    const imagesForCarousel = JSON.parse(localStorage.getItem('carousel'));
    console.log(imagesForCarousel)
    return of(imagesForCarousel);
  }
}
