import { CategoriaPesquisaViewModel } from "src/modules/view-models/admin/categoria/CategoriaPesquisaViewModel";
import { CategoriaViewModel } from "src/modules/view-models/admin/categoria/CategoriaViewModel";
import { IBaseService } from "../IBaseService";

export interface ICategoriaService extends IBaseService<CategoriaViewModel, CategoriaPesquisaViewModel>{
}
