import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
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

  getImages(): Observable<any> {
    // return this.http.get(this.cnt.connectTo(
    //   'conteudo', 1, 'galeria'
    // ));

    const images = JSON.parse(localStorage.getItem('gallery'));
    console.log(images)
    return of(images);
  }

  getModelsImages(): Observable<any> {
    // return this.http.get(this.cnt.connectTo(
    //   'conteudo', 1, 'galeria/modelos'
    // ));

    const imagesForCarousel = JSON.parse(localStorage.getItem('gallery'));
    console.log(imagesForCarousel.filter((i: any) => i.modelsList));
    return of(imagesForCarousel.filter((i: any) => i.modelsList));
  }

  createMidia(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    return this.http.post(this.cnt.connectTo(
      'conteudo', 1, 'galeria'
    ), formData);
  }

  updateMidia(payload: any): Observable<any> {
    return this.http.put(this.cnt.connectTo(
      'conteudo', 1, `galeria/${payload.id}`
    ), payload);
  }

  deleteMidia(id: string): Observable<any> {
    return this.http.delete(this.cnt.connectTo(
      'conteudo', 1, `galeria/${id}`
    ));
  }
}
