import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { CntService } from './cnt.service';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(
    protected http: HttpClient,
    protected cnt: CntService
  ) { }

  getImages(): any {
    // return this.http.get(this.cnt.connectTo(
    //   'conteudo', 1, 'galeria'
    // ));

    const images = JSON.parse(localStorage.getItem('gallery'));
    console.log(images)
    return of(images);
  }

  getImagesForCarousel(): any {
    // return this.http.get(this.cnt.connectTo(
    //   'conteudo', 1, 'modelos'
    // ));

    const imagesForCarousel = JSON.parse(localStorage.getItem('carousel'));
    console.log(imagesForCarousel)
    return of(imagesForCarousel);
  }
}
