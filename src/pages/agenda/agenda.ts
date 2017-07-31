import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { TambauPage } from '../tambau/tambau';
import { BessaPage } from '../bessa/bessa';
import { TabatingaPage } from '../tabatinga/tabatinga';
import { TambabaPage } from '../tambaba/tambaba';
import { JacumaPage } from '../jacuma/jacuma';
import { LucenaPage } from '../lucena/lucena';
import { ManairaPage } from '../manaira/manaira';
import { Oficinas_1Page } from '../oficinas-1/oficinas-1';
import { Oficinas_2Page } from '../oficinas-2/oficinas-2';
import { ExpobotPage } from '../expobot/expobot';
import { ServiceFavoritos } from '../serviceFavoritos';
import { ServiceAgenda } from '../serviceAgenda';

/**
 * Generated class for the AgendaPage tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */
@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html'
})
export class AgendaPage {

  tambauRoot = TambauPage
  bessaRoot = BessaPage
  tabatingaRoot = TabatingaPage
  tambabaRoot = TambabaPage
  jacumaRoot = JacumaPage
  lucenaRoot = LucenaPage
  manairaRoot = ManairaPage
  oficinas_1Root = Oficinas_1Page
  oficinas_2Root = Oficinas_2Page
  expobotRoot = ExpobotPage
  agenda = []

  constructor(public navCtrl: NavController, public events: Events, public serviceFavoritos: ServiceFavoritos, public serviceAgenda: ServiceAgenda) {

    this.events.subscribe('functionAgendaPage:buttonClickStar', idAgenda => {
      serviceFavoritos.cadastraFavorito(idAgenda);
    });

    this.events.subscribe('functionAgendaPage:buttonClickUnStar', idAgenda => {
      serviceFavoritos.removeFavorito(idAgenda);
    });

  }

}
