import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-autenticacao',
  templateUrl: './autenticacao.component.html',
  styleUrls: ['./autenticacao.component.css']
})
export class AutenticacaoComponent implements OnInit {

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
