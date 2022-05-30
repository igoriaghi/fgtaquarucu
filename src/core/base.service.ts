import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Uteis } from 'src/modules/uteis/Uteis';
import { RetornoApiViewModel } from 'src/modules/view-models/RetornoApiViewModel';
import { IBaseService } from './interfaces/IBaseService';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService<T, U> implements IBaseService<T, U> {

  URLBASE: string = 'URLBASE';

  constructor(public http: HttpClient) { 
  }

  obterTodos(buscar?: U): Observable<RetornoApiViewModel<U[]>> {

    let params = new HttpParams();

    if(buscar) params = Uteis.objetoToQueryStringInHttpParams(buscar);
    
    return this.http.get<RetornoApiViewModel<U[]>>(`${environment.apiURL}/${this.URLBASE}`, {params: params})
  }

  obterTodosGeral(): Observable<any> {    
    return this.http.get<any>(`${environment.apiURL}/${this.URLBASE}`)
  }

  obterPorId(id: number): Observable<U> {

    return this.http.get<U>(`${environment.apiURL}/${this.URLBASE}/${id}`);
  }

  adicionar(obj: T): Observable<T>{

    return this.http.post<T>(`${environment.apiURL}/${this.URLBASE}`, obj);
  }

  atualizar(id: any, obj: T): Observable<T> {

    return this.http.put<T>(`${environment.apiURL}/${this.URLBASE}/${id}`, obj);
  }
}

