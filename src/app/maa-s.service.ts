import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MaaSService {
  private maasUrl = 'https://api.maas2.apollorion.com?api_key=lrQYKsujer32aCMcDLSpdAcd7juySduVE4KqsrJs';

  constructor(private http: HttpClient) { }
  getMaas() {
    return this.http.get(this.maasUrl);
  }
}
