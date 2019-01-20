import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { CntService } from './cnt.service';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BeautyServicesService {

  constructor(
    protected http: HttpClient,
    protected cnt: CntService
  ) { }
  
  getBeautyServices(): any {
    // return this.http.get(this.cnt.connectTo(
    //   'conteudo', 1, 'servicos'
    // ));

    const beautyServices = JSON.parse(localStorage.getItem('beautyServices'));
    console.log(beautyServices)
    return of(beautyServices);
  }
}
