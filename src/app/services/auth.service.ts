import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CntService } from './cnt.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    protected http: HttpClient,
    protected cnt: CntService,
    protected router: Router
  ) { }

  authenticateUser(payload): any {
    return this.http.post(this.cnt.connectTo(1, 'login'), payload);
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/cadastro/login']);
  }
}
