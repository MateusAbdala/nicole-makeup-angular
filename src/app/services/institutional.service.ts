import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { CntService } from './cnt.service';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InstitutionalService {

  constructor(
    protected http: HttpClient,
    protected cnt: CntService
  ) { }

  getInstitutionalData(): any {
    // Todo: stop using mock data
    // return this.http.get(this.cnt.connectTo(1, 'institucional'));

    const institutionalData = JSON.parse(localStorage.getItem('institutionalData'));
    return of(institutionalData);
  }

  sendInstitutionalData(payload): any {
    return this.http.put(this.cnt.connectTo(1, 'institucional'), payload);
  }
}
