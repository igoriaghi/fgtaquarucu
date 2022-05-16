import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutenticacaoParticipanteComponent } from './autenticacao-participante/autenticacao-participante.component';
import { PainelParticipanteComponent } from './painel-participante/painel-participante.component';
import { ParticipanteComponent } from './participante.component';
import { RegistroComponent } from './registro/registro.component';



const routes: Routes = [
    {
      path: '', component: ParticipanteComponent,
      children: [
        {path: 'login', component: AutenticacaoParticipanteComponent},
        {path: 'registro',           component: RegistroComponent},
        {path: 'painel',             component: PainelParticipanteComponent},
      ]
    }
  ];
  

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  
export class ParticipanteRoutingModule { }
  