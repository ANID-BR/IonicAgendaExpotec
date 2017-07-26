import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InscritosPage } from '../inscritos/inscritos';

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
    }
    this.navC.push(InscritosPage);
  }

}
