import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  private apiUrl = 'http://localhost:3000/message'; // URL del endpoint

  constructor(private http: HttpClient) {}

  enviarMensaje(msg: string, tags: string[]): Observable<any> {
      // Crear el objeto de datos que se va a enviar
      const data = {
          msg,
          tags
      };

      // Configurar los encabezados HTTP, incluyendo el tipo de contenido JSON
      const headers = new HttpHeaders({
          'Content-Type': 'application/json'
          // Si necesitas autenticación, puedes agregar encabezados adicionales aquí
      });

      // Enviar una solicitud POST al endpoint y retornar la respuesta
      return this.http.post(this.apiUrl, data, { headers });
  }
}
