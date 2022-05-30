import { PaginacaoViewModel } from "../../PaginacaoViewModel";
import { CategoriaViewModel } from "./CategoriaViewModel";

export class CategoriaPesquisaViewModel extends CategoriaViewModel implements PaginacaoViewModel{
    total_registros: number;
    limit: number;
    offset?: number | undefined;
    sort?: string | undefined;
}
