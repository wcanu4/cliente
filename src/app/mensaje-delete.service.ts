import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MensajeDeleteService {

  private baseUrl = 'http://localhost:3000'; // URL base del servidor

  constructor(private http: HttpClient) {}

  // Método para eliminar un mensaje por ID
  deleteMessage(id: string): Observable<void> {
      return this.http.delete<void>(`${this.baseUrl}/message/${id}`);
  }
}
