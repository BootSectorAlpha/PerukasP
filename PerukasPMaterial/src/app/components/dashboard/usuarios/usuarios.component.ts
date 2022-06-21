import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
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
    {usuario: 'falanatal', nome: 'Fulana', sobrenome: 'de Tal', sexo: 'Feminino'},
    {usuario: 'carinasil', nome: 'Carina', sobrenome: 'Silva', sexo: 'Feminino'},
    {usuario: 'clairsouza', nome: 'Clair', sobrenome: 'Souza', sexo: 'Masculino'},
    {usuario: 'carinasil', nome: 'Carina', sobrenome: 'Silva', sexo: 'Feminino'},
    {usuario: 'lorrainejun', nome: 'Lorraine', sobrenome: 'Junqueira', sexo: 'Feminino'},
    {usuario: 'lucianagas', nome: 'Luciana', sobrenome: 'Gas', sexo: 'Feminino'},
    {usuario: 'margiesa', nome: 'Margie', sobrenome: 'Sa', sexo: 'Feminino'},
    {usuario: 'sabinobarros', nome: 'Sabino', sobrenome: 'Barros', sexo: 'Masculino'},
    {usuario: 'lucascon', nome: 'Lucas', sobrenome: 'Con', sexo: 'Masculino'},
    {usuario: 'maurosergio', nome: 'Mauro', sobrenome: 'Sérgio', sexo: 'Masculino'},
    {usuario: 'sergiomauro', nome: 'Sérgio', sobrenome: 'Mauro', sexo: 'Masculino'}
  ];

  displayedColumns: string[] = ['usuario', 'nome', 'sobrenome', 'sexo', 'acaoUsuario'];
  dataSource = new MatTableDataSource(this.listarUsuarios);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
