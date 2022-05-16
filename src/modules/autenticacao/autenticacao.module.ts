import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutenticacaoComponent } from './autenticacao.component';
import { AppRoutingModule } from 'src/app/app.routing';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  declarations: [
    AutenticacaoComponent,
  ]
})


export class AutenticacaoModule { }
