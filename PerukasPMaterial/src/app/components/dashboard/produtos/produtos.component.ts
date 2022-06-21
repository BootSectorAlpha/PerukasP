import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Produtos } from 'src/app/interfaces/produtos';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  listarProdutos: Produtos[] = [
    {nome: 'Impressora', valor: 250, imagem : new Image() }
  ];

  displayedColumns: string[] = ['nome', 'valor', 'imagem', 'acaoProduto'];
  dataSource = new MatTableDataSource(this.listarProdutos);
  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
