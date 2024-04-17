import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CredencialesService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  enviarCredenciales(key: string, sharedSecret: string): Observable<any> {
    const url = `${this.baseUrl}/credential`;
    const body = {
      key,
      shared_secret: sharedSecret
    };
    return this.http.put(url, body);
  }
}
