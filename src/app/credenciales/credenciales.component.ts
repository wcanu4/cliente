import { Component } from '@angular/core';
import { CredencialesService } from '../credenciales.service';





@Component({
  selector: 'app-credenciales',
  templateUrl: './credenciales.component.html',
  styleUrls: ['./credenciales.component.css']
})
export class CredencialesComponent {
  key: string = '';
  sharedSecret: string = '';
  successMessage: string | null = null; // Para almacenar el mensaje de éxito
  errorMessage: string | null = null; // Para almacenar el mensaje de error

  constructor(private credencialesService: CredencialesService) {}

  enviarDatos() {
    this.successMessage = null; // Reiniciar los mensajes antes de cada envío
    this.errorMessage = null;

    this.credencialesService.enviarCredenciales(this.key, this.sharedSecret)
      .subscribe(
        response => {
          this.successMessage = 'Credenciales enviadas correctamente'; // Asignar mensaje de éxito
        },
        error => {
          this.errorMessage = 'Error al enviar credenciales'; // Asignar mensaje de error
        }
      );
  }
}
