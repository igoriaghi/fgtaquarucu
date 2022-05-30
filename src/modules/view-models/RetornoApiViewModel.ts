import { PaginacaoViewModel } from "./PaginacaoViewModel";

export interface RetornoApiViewModel<T>{
    itens: T, 
    paginacao: PaginacaoViewModel
}
