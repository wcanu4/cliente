import { Component } from '@angular/core';
import { MensajeDeleteService } from '../mensaje-delete.service';

@Component({
  selector: 'app-mensaje-delete',
  templateUrl: './mensaje-delete.component.html',
  styleUrls: ['./mensaje-delete.component.css']
})
export class MensajeDeleteComponent {
  id: string = ''; // Almacena el ID ingresado por el usuario
  successMessage: string | null = null; // Almacena mensaje de éxito
  errorMessage: string | null = null; // Almacena mensaje de error

  constructor(private mensajeDeleteService: MensajeDeleteService) {}

  eliminarMensaje(): void {
      // Restablecer mensajes antes de cada solicitud
      this.successMessage = null;
      this.errorMessage = null;

      // Llamar al servicio para eliminar un mensaje por ID
      this.mensajeDeleteService.deleteMessage(this.id)
          .subscribe(
              () => {
                  // Asignar mensaje de éxito
                  this.successMessage = 'Mensaje eliminado correctamente';
              },
              error => {
                  // Asignar mensaje de error
                  this.errorMessage = 'Error al eliminar el mensaje';
              }
          );
  }
}
