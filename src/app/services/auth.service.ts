import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CntService } from './cnt.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    protected http: HttpClient,
    protected cnt: CntService
  ) { }

  authenticateUser(payload): any {
    return this.http.post(this.cnt.connectTo(
      'conteudo', 1, 'login'
    ), payload);

    // localStorage.setItem('institutionalData', JSON.stringify(payload));
    // return of(true);
  }
}
