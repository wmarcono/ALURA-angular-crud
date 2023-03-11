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

  carregarMaisPensamentos() {
    this.pensamentoService.listar(++this.paginaAtual).subscribe(listaPensamentos => {
      this.listaPensamentos.push(...listaPensamentos)
      if (!listaPensamentos.length) {
        this.haMaisPensamentos = false
      }
    })
  }

  ngOnInit(): void {
    this.pensamentoService.listar(this.paginaAtual).subscribe((lista) => {
      this.listaPensamentos = lista
    })
  }

}
