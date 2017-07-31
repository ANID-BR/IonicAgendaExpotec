import { Component } from '@angular/core';
import { NavController, NavParams, Events, ActionSheetController, ModalController } from 'ionic-angular';
import { ServiceFavoritos } from '../serviceFavoritos';
import { ServiceAgenda } from '../serviceAgenda';
import { ModalAgenda } from '../modal-agenda/modal-agenda';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-tambau',
  templateUrl: 'tambau.html',
})
export class TambauPage {
  private ID_SALA = 1;
  public listaAgenda;
  public dataEscolhida;

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events, public serviceFavoritos: ServiceFavoritos, public serviceAgenda: ServiceAgenda, public storage: Storage, public actionsheetCtrl: ActionSheetController, public modalCtrl: ModalController) {

    this.listaAgenda = serviceAgenda.getAgenda();
    this.dataEscolhida = 20170809;

    this.carregaPagina(this.dataEscolhida);
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

  carregaPagina(data) {
    this.storage.get('agenda').then((agendaStorage) => {
      this.listaAgenda = JSON.parse(agendaStorage);
      if( this.listaAgenda != null )
        this.listaAgenda = this.listaAgenda[0][this.ID_SALA][data];
    });
  }

  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Datas',

      buttons: [
        {
          text: '09/08/2017',
          handler: () => {
            this.carregaPagina(20170809);
          }
        },
        {
          text: '10/08/2017',
          handler: () => {
            this.carregaPagina(20170810);
          }
        },
        {
          text: '11/08/2017',
          handler: () => {
            this.carregaPagina(20170811);
          }
        }
      ]
    });
    actionSheet.present();
  }

  openModal(id) {

      let agendaEscolhida = this.listaAgenda.filter((item) => {
        return item.id == id;
      });

      let objetoAgenda = {};
      objetoAgenda['titulo'] = agendaEscolhida[0].titulo;
      objetoAgenda['texto'] = agendaEscolhida[0].texto;

      let modal = this.modalCtrl.create(ModalAgenda, {objeto_agenda: objetoAgenda});
      modal.present();
  }

}
