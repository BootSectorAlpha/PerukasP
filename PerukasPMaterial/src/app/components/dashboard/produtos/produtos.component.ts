import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/interfaces/produtos';

const listarProdutos: Produtos[] = [
  {nome: 'Impressora', valor: 250, imagem : new Image() }

];

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'valor', 'imagem', 'acao'];
  dataSource = listarProdutos;
  constructor() { }


  ngOnInit(): void {
  }

}
