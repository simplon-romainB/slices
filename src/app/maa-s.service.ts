import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MaaSService {
  private maasUrl = 'https://api.maas2.apollorion.com';

  constructor(private http: HttpClient) { }
  getMaas() {
    return this.http.get(this.maasUrl);
  }
}
