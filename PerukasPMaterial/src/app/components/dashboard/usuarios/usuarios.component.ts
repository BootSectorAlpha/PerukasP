import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Usuarios } from 'src/app/interfaces/usuarios';



@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  listarUsuarios: Usuarios[] = [
    {usuario: 'lutiellcsf', nome: 'Lutiell', sobrenome: 'Clair', sexo: 'Masculino'},
    {usuario: 'falanatal', nome: 'Fulana', sobrenome: 'de Tal', sexo: 'Feminino'}
  ];

  displayedColumns: string[] = ['usuario', 'nome', 'sobrenome', 'sexo', 'acaoUsuario'];
  dataSource = new MatTableDataSource(this.listarUsuarios);
  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
