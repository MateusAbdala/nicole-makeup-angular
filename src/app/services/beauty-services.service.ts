import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeautyServicesService {

  constructor() { }
  
  getBeautyServices(): any {
    const beautyServices = JSON.parse(localStorage.getItem('beautyServices'));
    console.log(beautyServices)
    return of(beautyServices);
  }
}
