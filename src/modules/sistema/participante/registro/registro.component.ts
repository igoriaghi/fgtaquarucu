import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { RegistroService } from './registro.service';


@Component({
  selector: 'app-participante',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formulario: FormGroup;
  // validationMessages: ValidationMessages = {};
  // genericValidator!: GenericValidator;
  // displayMessage?: DisplayMessage;


  alterar: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private registroService: RegistroService,
    private messageService: MessageService
    
  ) { }


  ngOnInit() {
    this.criarFormulario();

  }

  criarFormulario(){
    this.formulario = this.fb.group({
      cpf_cnpj:             [null, Validators.required],
      nome:                 [null, Validators.required],
      fantasia:             [null, Validators.required],
      ja_participou_da_fgt: [true, Validators.required],
      senha:                [null, [Validators.required, Validators.minLength(6)]],
      confirmacao_senha:    [null, [Validators.required, Validators.minLength(6)]],
      email:                [null, [Validators.required, Validators.email]],
      cep:                  [null, Validators.required],
      endereco:             [null, Validators.required],
      bairro:               [null, Validators.required],
      cidade:               [1, Validators.required],
      estado:               [1, Validators.required],
      categoria:            [1, Validators.required],
      dt_cadastro:          [null],
    });
  }


  onSubmit(){

    this.messageService.add({severity:'success', summary:'Cadastro', detail:'Enviado com sucesso!'});

    console.log(this.formulario);

    this.registroService.registrarParticipante();

    this.router.navigateByUrl('/login');

  }


}
