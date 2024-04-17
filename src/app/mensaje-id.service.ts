import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MensajeIdService {

  private baseUrl = 'http://localhost:3000'; // URL base del servidor

  constructor(private http: HttpClient) {}

  // Método para obtener un mensaje por ID
  getMessageById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/message/${id}`);
  }
}
