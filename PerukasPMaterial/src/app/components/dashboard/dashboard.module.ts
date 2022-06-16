import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { ProdutosComponent } from './produtos/produtos.component';


@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    UsuariosComponent,
    RelatoriosComponent,
    ProdutosComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
