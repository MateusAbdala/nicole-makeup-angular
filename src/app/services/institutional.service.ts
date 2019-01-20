import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstitutionalService {

  constructor() { }

  getInstitutionalData(): any {
    const institutionalData = JSON.parse(localStorage.getItem('institutionalData'));
    return of(institutionalData);
  }

  sendInstitutionalData(payload): any {
    localStorage.setItem('institutionalData', JSON.stringify(payload));
    return of(true);
  }
}
