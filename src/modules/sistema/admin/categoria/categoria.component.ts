import { Component, OnInit } from '@angular/core';
import { CategoriaPesquisaViewModel } from 'src/modules/view-models/admin/categoria/CategoriaPesquisaViewModel';
import { CategoriaViewModel } from 'src/modules/view-models/admin/categoria/CategoriaViewModel';
import { RetornoApiViewModel } from 'src/modules/view-models/RetornoApiViewModel';
import { CategoriaService } from './categoria.service';
import { SelectItem, PrimeNGConfig} from 'primeng/api';
@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  modalCadastro: boolean = true;
  listaCategoria: Array<CategoriaViewModel>;

  constructor(
    private primengConfig: PrimeNGConfig,
    private categoriaService: CategoriaService
  ) { 
    this.primengConfig.ripple = true;
  }

  ngOnInit() {
    this.categoriaService.obterTodosGeral().subscribe(
      data => { 
        this.listaCategoria = data;
      },
      error => {
        
      }
    )
  }

}
