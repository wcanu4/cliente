import { Component } from '@angular/core';
import { MensajeService } from '../mensaje.service';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent {
  msg: string = '';
  tags: string = ''; // Puedes usar una cadena separada por comas para los tags
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private mensajeService: MensajeService) {}

  enviarMensaje() {
    // Convierte la cadena de tags a un arreglo de tags
    const tagsArray = this.tags.split(',').map(tag => tag.trim());

    // Llama al servicio para enviar el mensaje
    this.mensajeService.enviarMensaje(this.msg, tagsArray)
        .subscribe(
            response => {
                // Si la respuesta tiene un campo 'messageId', muéstralo
                if (response && response.messageId) {
                    this.successMessage = `Mensaje enviado correctamente. ID del mensaje: ${response.messageId}`;
                } else {
                    this.successMessage = 'Mensaje enviado correctamente, pero no se recibió un ID de mensaje';
                }
                this.errorMessage = ''; // Limpia el mensaje de error si lo hay
            },
            error => {
                this.errorMessage = 'Error al enviar mensaje';
                this.successMessage = ''; // Limpia el mensaje de éxito si lo hay
            }
        );
}
}
