import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';




import { ParticipanteRoutingModule } from './participante-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParticipanteComponent } from './participante.component';
import { AutenticacaoParticipanteComponent } from './autenticacao-participante/autenticacao-participante.component';
import { PainelParticipanteComponent } from './painel-participante/painel-participante.component';
import { NgxMaskModule } from 'ngx-mask';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ButtonModule } from 'primeng/button';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ParticipanteRoutingModule,
    NgxMaskModule.forRoot(),
    TypeaheadModule.forRoot(),
    ToggleButtonModule,
    ButtonModule
    
  ],
  declarations: [
    ParticipanteComponent,
    AutenticacaoParticipanteComponent,
    RegistroComponent,
    PainelParticipanteComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA // Tells Angular we will have custom tags in our templates
  ]

})
export class ParticipanteModule { }
