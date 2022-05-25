import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { CategoriaComponent } from "./categoria/categoria.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
    {
      path: '', component: AdminComponent,
      children: [
        {path: 'categoria',     component: CategoriaComponent},
        {path: 'dashboard',     component: DashboardComponent},
      ]
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class AdminRoutingModule { }