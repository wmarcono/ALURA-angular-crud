import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../Pensamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  constructor(private pensamentoService: PensamentoService) { }

  listaPensamentos: Pensamento[] = [];
  paginaAtual: number = 1
  haMaisPensamentos: boolean = true
  filtro: string = '';
  favoritos: boolean = false;
  listaFavoritos: Pensamento[] = []
  titulo: string = "Meu Mural"

  ngOnInit(): void {
    this.pensamentoService.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe((lista) => {
      this.listaPensamentos = lista
    })
  }

  carregarMaisPensamentos() {
    this.pensamentoService.listar(++this.paginaAtual, this.filtro, this.favoritos).subscribe(listaPensamentos => {
      this.listaPensamentos.push(...listaPensamentos)
      if (!listaPensamentos.length) {
        this.haMaisPensamentos = false
      }
    })
  }

  pesquisarPensamentos() {
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.pensamentoService.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe(listaPensamentos => {
      this.listaPensamentos = listaPensamentos
    })
  }

  listarTodos() {
    this.favoritos = false
    this.paginaAtual = 1
    this.titulo = "Meu Mural"
    this.ngOnInit()
  }

  listarFavoritos() {
    this.titulo = "Meus Favoritos"
    this.haMaisPensamentos = true
    this.paginaAtual = 1
    this.favoritos = true
    this.pensamentoService.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe(listaFav => {
      this.listaPensamentos = listaFav;
      this.listaFavoritos = listaFav;
    })
  }

}
