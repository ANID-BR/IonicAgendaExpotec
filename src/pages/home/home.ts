import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InscritosPage } from '../inscritos/inscritos';
import { AgendaPage } from '../agenda/agenda';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  navC;

  constructor(public navCtrl: NavController) {
    this.navC = navCtrl;
  }

  mostrarPagina(pagina: string) {
    var destino = null;
    switch(pagina) {
      case 'inscritos':
        destino = InscritosPage;
      break;
      case 'agenda':
        destino = AgendaPage;
      break;
    }
    this.navC.push(destino);
  }

}
