import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstitutionalService {

  constructor() { }

  getInstitutionalData(): any {
    const institutionalData = JSON.parse(localStorage.getItem('institutionalData'));
    console.log(institutionalData)
    return of(institutionalData);
  }
}
