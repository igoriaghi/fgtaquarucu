import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from 'src/core/base.service';
import { IParticipanteService } from 'src/core/interfaces/admin/IParticipanteService';
import { ParticipantePesquisaViewModel } from 'src/modules/view-models/admin/participante/ParticipantePesquisaViewModel';
import { ParticipanteViewModel } from 'src/modules/view-models/admin/participante/ParticipanteViewModel';
import { ViaCepViewModel } from 'src/modules/view-models/ViaCepViewModel';

@Injectable({
  providedIn: 'root'
})
export class RegistroService extends BaseService<ParticipanteViewModel, ParticipantePesquisaViewModel> implements IParticipanteService  {
  URLBASE: string = 'Participante';

  registrarParticipante(){
    
  }

  buscarCep(cep: string): Observable<any>{
    return this.http.get<ViaCepViewModel>(`https://viacep.com.br/ws/${cep}/json/`)
  }

}

// export class CategoriaService extends BaseService<CategoriaViewModel, CategoriaPesquisaViewModel> implements ICategoriaService {
//   URLBASE: string = 'Categoria';
// }
