import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes: Ajustes= {
    temaURL:'assets/css/colors/default.css',
    tema: 'default'
  };

  constructor(@Inject( DOCUMENT ) private _document, ) { 
    this.cargarAjustes();
  }

  guardarAjustes () {
    localStorage.setItem('ajustes', JSON.stringify (this.ajustes));
  }

  cargarAjustes () {
    if ( localStorage.getItem('ajustes') ) {
      //console.log ('cargar de localstorage');
      this.ajustes = JSON.parse (localStorage.getItem('ajustes'));
      this.aplicarTema(this.ajustes.tema);
    } else {
      //console.log ('usando calores por defecto');
      this.aplicarTema(this.ajustes.tema);
    }
  }

  aplicarTema(tema: string) {
    
    let url = `assets/css/colors/${tema}.css`;
    this._document.getElementById('tema').setAttribute('href',url);

    this.ajustes.tema = tema;
    this.ajustes.temaURL = url;

    this.guardarAjustes();
  }
}

interface Ajustes {
  temaURL: string;
  tema: string;
}