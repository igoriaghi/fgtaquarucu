import { Observable } from "rxjs";
import { RetornoApiViewModel } from "src/modules/view-models/RetornoApiViewModel";

export interface IBaseService<T, U> {
  URLBASE: string;
  obterTodos(pesquisa?: U) : Observable<RetornoApiViewModel<Array<U>>>
  obterPorId(id: number) : Observable<U>
  adicionar(obj: T) : Observable<T>
  atualizar(id:number, obj: T) : Observable<T>
}

