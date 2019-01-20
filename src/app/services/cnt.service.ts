import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CntService {

  // CNT attributes
  public finalUrl: string;

  // Microservices
  public contentBaseUrl = `${environment.host}/conteudo/`;

  constructor() { }

  connectTo(service: string, version: number, url: string): string {
    return this.getEndingPoint(service) + `v${version}/` + url;
  }

  getEndingPoint(serviceType: string) {
    if (serviceType === 'conteudo') {
      return this.contentBaseUrl;
    }
  }
}
