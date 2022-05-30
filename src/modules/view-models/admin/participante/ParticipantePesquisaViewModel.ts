import { PaginacaoViewModel } from "../../PaginacaoViewModel";
import { ParticipanteViewModel } from "./ParticipanteViewModel";


export class ParticipantePesquisaViewModel extends ParticipanteViewModel implements PaginacaoViewModel{
    total_registros: number;
    limit: number;
    offset?: number | undefined;
    sort?: string | undefined;

}
