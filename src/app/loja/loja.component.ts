import { Produto } from "./../models/Produto";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-loja",
  templateUrl: "./loja.component.html",
  styleUrls: ["./loja.component.css"]
})
export class LojaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  produto1: Produto = new Produto(1, "Arroz", 6.75);
  produto2: Produto = new Produto(2, "Feijão", 8.25);

  listaProdutos: Array<Produto> = [this.produto1, this.produto2];

  carrinho: Array<any> = [];
  somaCarrinho: number = 0;

  adicionaAoCarrinho(produto: Produto) {
    this.verificaCarrinho(produto);
  }

  verificaCarrinho(produto: Produto) {
    let produtoCarrinho = this.carrinho.find(elemento => {
      return elemento.nome == produto.nome;
    });
    if (produtoCarrinho != undefined) {
      this.atualizaCarrinho(produtoCarrinho);
    } else {
      this.carrinho.push({
        nome: produto.nome,
        quantidade: 1,
        preco: produto.preco
      });
      this.somaCarrinho += produto.preco;
    }
  }

  atualizaCarrinho(produtoCarrinho) {
    this.carrinho.find(elemento => {
      if (elemento.nome == produtoCarrinho.nome) {
        elemento.quantidade += 1;
        this.somaCarrinho += elemento.preco;
      }
    });
  }
}
