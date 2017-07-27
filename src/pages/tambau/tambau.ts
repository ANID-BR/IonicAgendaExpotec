import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { ServiceFavoritos } from '../serviceFavoritos';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the TambauPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-tambau',
  templateUrl: 'tambau.html',
})
export class TambauPage {
  public listaAgenda;

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events, public serviceFavoritos: ServiceFavoritos) {
    this.listaAgenda = [{id: 1, titulo: 'yetdukyfgaksuydfg  sdiufguayksd fasdfguykasdgf', hora_inicial: '13:00', hora_final: '14:00'},
                           {id: 2, titulo: 'rwewgshgd rewqrqewrq wwewewe', hora_inicial: '14:00', hora_final: '15:00'}];//.agenda[1];
  }

  buttonClickStar(idAgenda) {
      this.events.publish('functionAgendaPage:buttonClickStar', idAgenda);
  }

  buttonClickUnStar(idAgenda) {
      this.events.publish('functionAgendaPage:buttonClickUnStar', idAgenda);
  }

  verificaFavorito(idAgenda) {
    return this.serviceFavoritos.getFavoritos().indexOf(idAgenda) != -1;
  }

}
