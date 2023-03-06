import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../Pensamento';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor( private service: PensamentoService, private router: Router ) { }

  criarPensamento() {
    this.service.criar(this.pensamento).subscribe(()=>{
      this.router.navigate(['listar-pensamento']);
    });

  }

  cancelarPensamento() {
    this.router.navigate(['listar-pensamento']);
  }

  ngOnInit(): void {
  }

}
