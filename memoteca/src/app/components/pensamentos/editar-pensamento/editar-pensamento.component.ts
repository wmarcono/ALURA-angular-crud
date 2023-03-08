import { Router, ActivatedRoute } from '@angular/router';
import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../Pensamento';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit {

  formulario!: FormGroup

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) { }

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/)
      ])],
      autoria: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      modelo: ['modelo1']
    })
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento
    })
  }

  editarPensamento() {
    console.log(this.formulario)
    if (this.formulario.valid) {
      // this.service.editar(this.pensamento).subscribe(() => {
      //   this.router.navigate(['listar-pensamento'])
      // })
    }
  }

  cancelarPensamento() {
    this.router.navigate(['listar-pensamento'])
  }

  habilitarBotao(): string {
    if (this.formulario.valid) {
      return 'botao';
    }
    return 'botao__desabilitado';
  }

}
