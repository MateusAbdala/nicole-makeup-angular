import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { CntService } from './cnt.service';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { GalleryImage } from '../shared/models/galleryImage.model';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(
    protected http: HttpClient,
    protected cnt: CntService
  ) { }

  getImages(): Observable<any> {
    // return this.http.get(this.cnt.connectTo(1, 'galeria'));

    const images = JSON.parse(localStorage.getItem('gallery'));
    console.log(images)
    return of(images);
  }

  getModelsImages(): Observable<any> {
    // return this.http.get(this.cnt.connectTo(1, 'galeria/modelos'));

    const modelos = JSON.parse(localStorage.getItem('gallery'));
    console.log(modelos.filter((i: GalleryImage) => i.modelsList));
    return of(modelos.filter((i: GalleryImage) => i.modelsList));
  }

  updateModels(modelos: Array<GalleryImage>): Observable<any> {
    return this.http.put(this.cnt.connectTo(1, 'galeria/modelos'), modelos);
  }

  createMidia(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    return this.http.post(this.cnt.connectTo(1, 'galeria'), formData);
  }

  updateMidia(payload: GalleryImage): Observable<any> {
    return this.http.put(this.cnt.connectTo(1, `galeria/${payload.id}`), payload);
  }

  deleteMidia(id: number): Observable<any> {
    return this.http.delete(this.cnt.connectTo(1, `galeria/${id}`));
  }
}
