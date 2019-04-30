import { Component } from '@angular/core';
import {ServiceService} from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = null;
  autor = null;
  conteudo = null;

  constructor(private logica: ServiceService) {
  }

  salvar(form) {
    this.logica.salvar(this.titulo, this.autor, this.conteudo);
    form.reset();
  }

}
