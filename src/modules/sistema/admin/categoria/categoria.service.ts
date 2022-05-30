import { Injectable } from '@angular/core';
import { BaseService } from 'src/core/base.service';
import { ICategoriaService } from 'src/core/interfaces/admin/ICategoriaService';
import { CategoriaPesquisaViewModel } from 'src/modules/view-models/admin/categoria/CategoriaPesquisaViewModel';
import { CategoriaViewModel } from 'src/modules/view-models/admin/categoria/CategoriaViewModel';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService extends BaseService<CategoriaViewModel, CategoriaPesquisaViewModel> implements ICategoriaService {
  URLBASE: string = 'Categoria';


}
