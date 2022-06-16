import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { NavbarComponent } from './navbar/navbar.component';
import { ProdutoComponent } from './produto/produto.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';


@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    ProdutoComponent,
    UsuariosComponent,
    RelatoriosComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
