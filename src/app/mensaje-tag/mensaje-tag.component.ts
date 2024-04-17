import { Component } from '@angular/core';
import { MensajeTagService } from '../mensaje-tag.service';

@Component({
  selector: 'app-mensaje-tag',
  templateUrl: './mensaje-tag.component.html',
  styleUrls: ['./mensaje-tag.component.css']
})
export class MensajeTagComponent {
  tag: string = ''; // Almacena la etiqueta ingresada por el usuario
  messages: any[] = []; // Almacena los mensajes obtenidos
  errorMessage: string | null = null; // Almacena mensajes de error

  constructor(private mensajeTagService: MensajeTagService) {}

  obtenerMensajes(): void {
      // Restablecer mensajes y error antes de cada solicitud
      this.messages = [];
      this.errorMessage = null;

      // Llamar al servicio para obtener mensajes por etiqueta
      this.mensajeTagService.getMessagesByTag(this.tag)
          .subscribe(
              response => {
                  // Almacenar los mensajes recibidos
                  this.messages = response;
              },
              error => {
                  // Almacenar mensaje de error
                  this.errorMessage = 'Error al obtener los mensajes';
              }
          );
  }
}
