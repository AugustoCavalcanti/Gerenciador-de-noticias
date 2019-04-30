import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  Visualizar = null;
  Tela = 'home'
  Noticias = [];
  Autores = [
    {
    nome : 'Augusto',
    publicacoes : 0
    },
    {
    nome : 'Thamyres',
    publicacoes : 0
    },
    {
    nome : 'Pedro',
    publicacoes : 0
    },
    {
    nome : 'Henrique',
    publicacoes : 0
    },
  ];

  constructor() { }

  mudarTela(tela) {
    this.Tela = tela;
  }

  ListaNoticias() {
    return this.Noticias.sort(function(a, b) {return b.visualisacoes - a.visualisacoes});
  }

  ListaAutores() {
    return this.Autores;
  }

  LerNoticia(noticia) {
    noticia.visualisacoes += 1;
    this.Visualizar = noticia;
  }

  salvar(titulo, autor, conteudo) {
    let news = {
      titulo,
      autor,
      conteudo,
      publicada : false,
      visualisacoes : 0,
    };
    this.Noticias.push(news);
  }

  pulicar(noticia) {
    noticia.publicada = true;
    for (let a of this.Autores) {
      if ( a.nome === noticia.autor) {
        a.publicacoes += 1;
      }
    }
  }

  AutorMaisPublicacoes() {
    return this.Autores.sort(function(a, b) {return b.publicacoes - a.publicacoes} )[0];
  }

}
