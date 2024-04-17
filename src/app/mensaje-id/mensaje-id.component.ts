import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MensajeIdService } from '../mensaje-id.service';

@Component({
  selector: 'app-mensaje-id',
  templateUrl: './mensaje-id.component.html',
  styleUrls: ['./mensaje-id.component.css']
})
export class MensajeIdComponent {
  messageId: string = '';
  message: any = null;
  errorMessage: string | null = null;

  constructor(private mensajeIdService: MensajeIdService) {}

  obtenerMensaje(): void {
    this.mensajeIdService.getMessageById(this.messageId)
      .subscribe(
        response => {
          this.message = response; // Almacena el mensaje recibido
          this.errorMessage = null; // Borra el mensaje de error si existe
        },
        error => {
          this.errorMessage = 'Error al obtener el mensaje'; // Asigna el mensaje de error
          this.message = null; // Borra el mensaje si hay error
        }
      );
  }
}
