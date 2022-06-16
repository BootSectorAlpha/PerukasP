import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { ProdutosComponent } from './produtos/produtos.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, children:[
    {path: '', component: InicioComponent},
    {path: 'usuarios', component: UsuariosComponent},
    {path: 'relatorios', component: RelatoriosComponent},
    {path: 'produtos', component: ProdutosComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
