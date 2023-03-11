import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-carregar-mais',
  templateUrl: './btn-carregar-mais.component.html',
  styleUrls: ['./btn-carregar-mais.component.css']
})
export class BtnCarregarMaisComponent {

  @Input() haMaisPensamentos: boolean = false;

}
