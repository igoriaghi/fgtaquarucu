import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { fromEvent, merge, Observable } from 'rxjs';
import { Estados } from 'src/modules/uteis/Estados';
import { DisplayMessage, GenericValidator, ValidationMessages } from 'src/modules/validacao/generic-form-validation';
import { MensagensValidacao } from 'src/modules/validacao/mensagensValidacao';
import { CategoriaViewModel } from 'src/modules/view-models/admin/categoria/CategoriaViewModel';
import { ParticipanteViewModel } from 'src/modules/view-models/admin/participante/ParticipanteViewModel';
import { CategoriaService } from '../../admin/categoria/categoria.service';
import { RegistroService } from './registro.service';


@Component({
  selector: 'app-participante',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit, AfterViewInit {
  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements!: ElementRef[];
  formulario!: FormGroup;
  blankForm: FormGroup;
  validationMessages: ValidationMessages = {};
  genericValidator!: GenericValidator;
  displayMessage?: DisplayMessage;


  objParticipante: ParticipanteViewModel = new ParticipanteViewModel();
  listaCategoria: Array<CategoriaViewModel>;
  detalhesCategoria: any;

  icon: string = "pi pi-check";
  mask: string = `000.000.000-000`;
  alterar: boolean = false;
  listaEstados: Estados[] = Estados.listaEstados;


  cidades = 
    [
      {
        "id": "1",
        "ibge_cidade": "1721000",
        "cidade": "PALMAS",
        "ibge_uf": "17",
        "uf": "TO"
      },
      {
        "id": "2",
        "ibge_cidade": "1721000",
        "cidade": "PORTO NACIONAL",
        "ibge_uf": "17",
        "uf": "TO"
      },
      {
        "id": "3",
        "ibge_cidade": "1721000",
        "cidade": "PARAISO",
        "ibge_uf": "17",
        "uf": "TO"
      },
      {
        "id": "4",
        "ibge_cidade": "1721000",
        "cidade": "MIRACEMA DO TOCANTINS",
        "ibge_uf": "17",
        "uf": "TO"
      },
      {
        "id": "4",
        "ibge_cidade": "1721000",
        "cidade": "DOIS IRMAOS",
        "ibge_uf": "17",
        "uf": "TO"
      },
      {
        "id": "5",
        "ibge_cidade": 38,
        "cidade": "APARECIDA DO RIO NEGRO",
        "ibge_uf": 20,
        "uf": 29
      },
      {
        "id": "6",
        "ibge_cidade": 28,
        "cidade": "TESTE",
        "ibge_uf": 31,
        "uf": 37
      }
    ]
  ;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private registroService: RegistroService,
    private messageService: MessageService,
    private categoriaService: CategoriaService,
    private primengConfig: PrimeNGConfig
    
  ) { 
    this.messagesValidations();
  }


  ngOnInit() {
    this.criarFormulario();

    this.categoriaService.obterTodosGeral().subscribe(
      retorno => { 
        this.listaCategoria = retorno;
      },
      error => {
        this.messageService.add({severity:'error', summary:'Categoria', detail:'Erro ao carregar Categorias!'});
      }
    )
    
    this.primengConfig.ripple = true;

  }

  criarFormulario(){
    this.formulario = this.fb.group({
      cpfCnpj:              ['', [Validators.required]],
      tipoParticipante:     [1],
      nome:                 ['', [Validators.required]],
      fantasia:             [''],
      jaParticipouFgt:      [false],
      senha:                ['', [Validators.required, Validators.minLength(6)]],
      confirmacaoSenha:     ['', [Validators.required, Validators.minLength(6)]],
      email:                ['', [Validators.required, Validators.email]],
      cep:                  ['', [Validators.required]],
      endereco:             ['', [Validators.required]],
      numero:               ['', [Validators.required]],
      bairro:               ['', [Validators.required]],
      telefone:             ['', [Validators.required]],
      ibgeCidade:           ['1721000'],
      cidade:               ['Palmas', [Validators.required]],
      ibgeUf:               ['17'],
      uf:                   ['TO', [Validators.required]],
      categoriaId:          [0, [Validators.min(1)]],
      dtCadastro:           [null],
    });

    this.blankForm = this.formulario.value;
  }

  cidadeSelecionada(event?: any){
    console.log(event);
  }


  onSubmit(){

    console.log(this.formulario);

    this.formulario.markAllAsTouched();
    this.displayMessage = this.genericValidator.processarMensagens(this.formulario);

    if(!this.formulario.valid){
      this.messageService.add({severity:'warn', summary:'Cadastro', detail:'Formulario inválido!'});
      return;
    }

    this.objParticipante = Object.assign(this.objParticipante, this.formulario.value);

    this.registroService.adicionar(this.objParticipante).subscribe(
      retorno => {
        this.messageService.add({severity:'success', summary:'Cadastro', detail:'Realizado com sucesso!'});
        this.formulario.reset(this.blankForm);
      },
      error => {
        // this.messageService.add({severity:'error', summary:'Cadastro', detail:'Erro relaizar cadastro!'});
        this.messageService.add({severity:'error', summary:'Conexão', detail:'Aguardando implementação com o banco de dados!'});
      }
    );

    

    //this.router.navigateByUrl('/login');

  }

  adicionar(){

    

  }

  obterCep(){

    if(!this.cep.value){
      return;
    }

    this.registroService.buscarCep(this.cep.value).subscribe(
      retorno => {

        if(retorno.erro){

          this.messageService.add({severity:'warn', summary:'CEP', detail:'Erro ao consultar CEP!'});

          return;
        }

        this.formulario.patchValue({
          cep: retorno.cep.replace('-',''),
          endereco: retorno.logradouro,
          bairro: retorno.bairro,
          ibgeCidade: retorno.ibge,
          cidade: retorno.localidade,
          ibgeUf: retorno.ibge.substring(0, 2),
          uf: retorno.uf,
        });
      },
      error => {
        this.messageService.add({severity:'error', summary:'CEP', detail:'Erro ao consultar CEP!'});
      }
    )

  }


  obterDetalhesCategoria(){
    
    this.listaCategoria.forEach(categoria => {
      if(categoria.id == this.categoriaId.value) this.detalhesCategoria = categoria.detalhes
    })

  }

  verificarTipoPessoa(){

    this.mask = this.cpfCnpj.value.length <= 11 ? `000.000.000-000` : `00.000.000/0000-00`
    
    this.cpfCnpj.value.length <= 11 ? this.tipoParticipante.setValue(1) : this.tipoParticipante.setValue(2);

  }

  showResponse(event?: any){

    console.log(event)

  }

/**
 * Validação do Formulário
 */
  
  messagesValidations(){
    this.validationMessages = {
      cpfCnpj: {
        required: MensagensValidacao.Obrigatorio('Cpf ou Cnpj')
      },
      nome: {
        required: MensagensValidacao.Obrigatorio('Nome')
      },
      senha: {
        required: MensagensValidacao.Obrigatorio('Senha'),
        minlength: 'Senha no mínimo 6 caracteres'
      },
      confirmacaoSenha: {
        required: MensagensValidacao.Obrigatorio('Confirmação de Senha'),
        minlength: 'Senha no mínimo 6 caracteres'
      },
      email: {
        required: MensagensValidacao.Obrigatorio('Email'),
        email: 'Email inválido'
      },
      cep: {
        required: MensagensValidacao.Obrigatorio('Cep')
      },
      endereco: {
        required: MensagensValidacao.Obrigatorio('Endereço')
      },
      numero: {
        required: MensagensValidacao.Obrigatorio('Número')
      },
      bairro: {
        required: MensagensValidacao.Obrigatorio('Bairro')
      },
      telefone: {
        required: MensagensValidacao.Obrigatorio('Telefone')
      },
      cidade: {
        required: MensagensValidacao.Obrigatorio('Cidade')
      },
      uf: {
        required: MensagensValidacao.Obrigatorio('UF')
      },
      categoriaId: {
        min: MensagensValidacao.Obrigatorio('Categoria')
      }


    };

    this.genericValidator = new GenericValidator(this.validationMessages);

  }

  ngAfterViewInit(): void {
    let controlBlurs: Observable<any>[] = this.formInputElements.map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));
    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.processarMensagens(this.formulario);
    });
  }



  get categoriaId() { return this.formulario?.get('categoriaId') as FormControl}
  get cep() { return this.formulario?.get('cep') as FormControl; }
  get cpfCnpj() { return this.formulario?.get('cpfCnpj') as FormControl; }
  get tipoParticipante() { return this.formulario?.get('tipoParticipante') as FormControl; }

}
