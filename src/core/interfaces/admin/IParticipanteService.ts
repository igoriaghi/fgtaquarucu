import { ParticipantePesquisaViewModel } from "src/modules/view-models/admin/participante/ParticipantePesquisaViewModel";
import { ParticipanteViewModel } from "src/modules/view-models/admin/participante/ParticipanteViewModel";
import { IBaseService } from "../IBaseService";

export interface IParticipanteService extends IBaseService<ParticipanteViewModel, ParticipantePesquisaViewModel> {
}
