import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JuradoComponent } from './jurado.component';
import { TecnicoComponent } from './tecnico/tecnico.component';
import { JuradoRoutingModule } from './jurado-routing.module';

@NgModule({
  imports: [
    CommonModule,
    JuradoRoutingModule
  ],
  declarations: [
    JuradoComponent,
    TecnicoComponent
  ]
})
export class JuradoModule { }
