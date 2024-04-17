import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MensajeTagService {

  private baseUrl = 'http://localhost:3000'; // URL base del servidor

  constructor(private http: HttpClient) {}

  // Método para obtener mensajes por etiqueta
  getMessagesByTag(tag: string): Observable<any> {
      return this.http.get(`${this.baseUrl}/messages/${tag}`);
  }
}
