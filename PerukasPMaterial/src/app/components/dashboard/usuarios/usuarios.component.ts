import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/interfaces/usuarios';

const listarUsuarios: Usuarios[] = [
  {usuario: 'lutiellcsf', nome: 'Lutiell', sobrenome: 'Clair', sexo: 'Masculino'}
];

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  displayedColumns: string[] = ['usuario', 'nome', 'sobrenome', 'sexo', 'acao'];
  dataSource = listarUsuarios;
  constructor() { }

  ngOnInit(): void {
  }

}
