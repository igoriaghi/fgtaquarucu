import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { CategoriaComponent } from "./categoria/categoria.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ParticipanteCadastroComponent } from "./participante-cadastro/participante-cadastro.component";
import { UsuarioComponent } from "./usuario/usuario.component";

const routes: Routes = [
    {
      path: '', component: AdminComponent,
      children: [
        {path: 'dashboard',     component: DashboardComponent},
        {path: 'categoria',     component: CategoriaComponent},
        {path: 'participante',  component: ParticipanteCadastroComponent},
        {path: 'usuario',       component: UsuarioComponent},
      ]
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class AdminRoutingModule { }