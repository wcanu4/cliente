import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MensajeIdComponent } from './mensaje-id/mensaje-id.component';

const routes: Routes = [
  // Ruta para el componente MensajeIdComponent
  { path: 'mensaje/:id', component: MensajeIdComponent },
  // Ruta por defecto
  { path: '', redirectTo: '/mensaje', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
