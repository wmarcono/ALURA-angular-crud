import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../Pensamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  constructor( private pensamentoService: PensamentoService ) { }

  listaPensamentos: Pensamento[] = [];

  ngOnInit(): void {
    this.pensamentoService.listar().subscribe((lista)=>{
      this.listaPensamentos = lista
    })
  }

}
