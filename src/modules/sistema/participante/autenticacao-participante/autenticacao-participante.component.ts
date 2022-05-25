import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-autenticacao-participante',
  templateUrl: './autenticacao-participante.component.html',
  styleUrls: ['./autenticacao-participante.component.css']
})
export class AutenticacaoParticipanteComponent implements OnInit {

  constructor(
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit() {
  }

  autenticacao(){
    this.messageService.add({severity:'info', summary:'Em Desenvolvimento', detail:'Tela ainda não Implementada!'});
    return;
  }

  registar() {
    this.router.navigateByUrl('/participante/registro');
  }

}
