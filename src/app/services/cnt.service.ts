import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CntService {

  // CNT attributes
  public finalUrl: string;

  constructor() { }

  connectTo(version: number, url: string): string {
    return environment.host + `v${version}/` + url;
  }
}
