import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutenticacaoComponent } from 'src/modules/autenticacao/autenticacao.component';



const rootRouterConfig : Routes = [

    { path: 'participante', loadChildren: () => import('../modules/sistema/participante/participante.module').then(mod => mod.ParticipanteModule)},
    { path: 'jurado', loadChildren: () => import('../modules/sistema/jurado/jurado.module').then(mod => mod.JuradoModule)},
    { path: 'login', component: AutenticacaoComponent },
    // { path: '', redirectTo: 'cadastro', pathMatch: 'full' },
    // { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},    
    // { path: 'admin', loadChildren: () => import('../modules/admin/admin.module').then(mod => mod.AdminModule), canLoad:[AdminAuthGuard], canActivate:[AdminAuthGuard]},
    // { path: 'cadastro/cliente-fornecedor', loadChildren: () => import('../modules/manager/cadastro/cliente-fornecedor/cliente-fornecedor.module').then(mod => mod.ClienteFornecedorModule), canActivate:[AuthGuard]},
    // { path: 'cadastro/estoque', loadChildren: () => import('../modules/manager/cadastro/estoque/estoque.module').then(mod => mod.EstoqueModule), canActivate:[AuthGuard]},
    // { path: 'cadastro/ecommerce', loadChildren: () => import('../modules/manager/cadastro/ecommerce/ecommerce.module').then(mod => mod.EcommerceModule), canActivate: [AuthGuard]},
    // { path: 'cadastro/servico', loadChildren: () => import('../modules/manager/cadastro/servico/servico.module').then(mod => mod.ServicoModule), canActivate:[AuthGuard]},
    // { path: 'cadastro/financeiro', loadChildren: () => import('../modules/manager/cadastro/financeiro/cadastro-financeiro.module').then(mod => mod.CadastroFinanceiroModule), canActivate:[AuthGuard]},
    // { path: 'cadastro/fiscal', loadChildren: () => import('../modules/manager/cadastro/contabil/contabil.module').then(mod => mod.ContabilModule), canActivate:[AuthGuard]},
    // { path: 'cadastro/usuario', loadChildren: () => import('../modules/manager/cadastro/usuario-manager/usuario-manager.module').then(mod => mod.UsuarioManagerModule), canActivate:[AuthGuard]},
    // { path: 'movimentacao', loadChildren: () => import('../modules/manager/movimentacao/movimentacao.module').then(mod => mod.MovimentacaoModule), canActivate:[AuthGuard]},
    // { path: 'financeiro', loadChildren: () => import('../modules/manager/financeiro/financeiro.module').then(mod => mod.FinanceiroModule), canActivate:[AuthGuard]},
    // { path: 'relatorio', loadChildren: () => import('../modules/manager/relatorio/relatorio.module').then(mod => mod.RelatorioModule), canActivate:[AuthGuard]},
    // { path: 'fiscal', loadChildren: () => import('../modules/manager/fiscal/fiscal.module').then(mod => mod.FiscalModule), canActivate:[AuthGuard]},
    // { path: 'sistema', loadChildren: () => import('../modules/manager/sistema/sistema.module').then(mod => mod.SistemaModule), canActivate:[AuthGuard]},
    // { path: 'checkin', loadChildren: () => import('../modules/manager/checkin/checkin.module').then(mod => mod.CheckinModule)},
    
];

@NgModule({
    imports:[
        RouterModule.forRoot(rootRouterConfig),
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}
