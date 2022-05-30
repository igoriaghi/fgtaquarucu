import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { RegistroService } from 'src/modules/sistema/participante/registro/registro.service';
import { CategoriaViewModel } from 'src/modules/view-models/admin/categoria/CategoriaViewModel';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-cadastro',
  templateUrl: './categoria-cadastro.component.html',
  styleUrls: ['./categoria-cadastro.component.css']
})
export class CategoriaCadastroComponent implements OnInit {

  alterar: boolean = false;
  formulario!: FormGroup;

  categoriaObj: CategoriaViewModel = new CategoriaViewModel();

  constructor(
    private fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private router: Router,
    private registroService: RegistroService,
    private messageService: MessageService,
    private categoriaService : CategoriaService
  ) { 
    this.criarFormulario();
  }

  ngOnInit() {

   let id = this.actRoute.snapshot.params.id;

   this.alterar = id > 0;

   if(!this.alterar) return;

   this.categoriaService.obterPorId(id).subscribe(
    retorno => {
      this.categoriaObj = retorno;
      this.criarFormulario();
    },
    error => {
      if(error.status == 404) this.messageService.add({severity:'info', summary:'Categoria', detail:`Status: ${error.status} Não encontrado!`});
      else this.messageService.add({severity:'error', summary:'Categoria', detail:'Erro ao obter categoria!'});
    }
  );

  }

  criarFormulario() {
    this.formulario = this.fb.group({
      id:        [this.alterar ? this.categoriaObj.id : 0],
      descricao: [this.alterar ? this.categoriaObj.descricao : '', Validators.required],
      detalhes:  [this.alterar ? this.categoriaObj.detalhes : ''],
      ativo:  [this.alterar ? this.categoriaObj.ativo : true],
    });
  }

  onSubmit(){

    this.alterar ? this.atualizar() : this.adicionar();

  }

  adicionar(){

    if(!this.formulario.valid) {
      this.messageService.add({severity:'info', summary:'Formulário inválido!', detail:'Preencha todos os campos.'});
      return;
    }

    this.categoriaObj = Object.assign(this.categoriaObj, this.formulario.value);

    this.categoriaService.adicionar(this.categoriaObj).subscribe(
      retorno =>{
        this.messageService.add({severity:'success', summary:'Categoria', detail:'Cadastrado com sucesso.'});
        this.router.navigate([`admin/categoria`]);
      },
      error => {
        this.messageService.add({severity:'error', summary:'Categoria', detail:'Falha ao salvar os dados!'});
      }
    );

  }

  atualizar(){

    if(!this.formulario.valid) {
      this.messageService.add({severity:'info', summary:'Formulário inválido!', detail:'Preencha todos os campos.'});
      return;
    }

    this.categoriaObj = Object.assign(this.categoriaObj, this.formulario.value);

    this.categoriaService.atualizar(this.categoriaObj.id, this.categoriaObj).subscribe(
      retorno =>{
        this.messageService.add({severity:'success', summary:'Categoria', detail:'Atualizado com sucesso!'});
      },
      error => {
        this.messageService.add({severity:'error', summary:'Categoria', detail:'Falha ao atualizar os dados!'});
      }
    );
  }

}
