import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JuradoComponent } from './jurado.component';
import { TecnicoComponent } from './tecnico/tecnico.component';




const routes: Routes = [
    {
      path: '', component: JuradoComponent,
      children: [
        {path: 'tecnico', component: TecnicoComponent},

      ]
    }
  ];
  

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  
export class JuradoRoutingModule { }
  