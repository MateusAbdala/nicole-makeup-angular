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
    // return this.http.get(this.cnt.connectTo(
    //   'conteudo', 1, 'institucional'
    // ));

    const institutionalData = JSON.parse(localStorage.getItem('institutionalData'));
    return of(institutionalData);
  }

  sendInstitutionalData(payload): any {
    // return this.http.put(this.cnt.connectTo(
    //   'conteudo', 1, 'institucional'
    // ), payload);

    localStorage.setItem('institutionalData', JSON.stringify(payload));
    return of(true);
  }
}
