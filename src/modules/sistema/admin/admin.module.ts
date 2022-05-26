import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ParticipanteCadastroComponent } from './participante-cadastro/participante-cadastro.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    CategoriaComponent,
    DashboardComponent,
    ParticipanteCadastroComponent,
    UsuarioComponent
  ],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AdminModule { }
