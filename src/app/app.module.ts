import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CredencialesComponent } from './credenciales/credenciales.component';
import { FormsModule } from '@angular/forms';
import { MensajeComponent } from './mensaje/mensaje.component';
import { MensajeService } from './mensaje.service';
import { MensajeIdComponent } from './mensaje-id/mensaje-id.component';
import { MensajeIdService } from './mensaje-id.service';
import { AppRoutingModule } from './app-routing.module';
import { MensajeTagComponent } from './mensaje-tag/mensaje-tag.component';
import { MensajeTagService } from './mensaje-tag.service';
import { MensajeDeleteComponent } from './mensaje-delete/mensaje-delete.component';
import { MensajeDeleteService } from './mensaje-delete.service';


@NgModule({
  declarations: [
    AppComponent,
    CredencialesComponent,
    MensajeComponent,
    MensajeIdComponent,
    MensajeTagComponent,
    MensajeDeleteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
    
  ],
  providers: [MensajeService,MensajeIdService,MensajeTagService,MensajeDeleteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
