import { Component } from '@angular/core';
import { Platform, NavParams, ViewController } from 'ionic-angular';

@Component({
  templateUrl: `modal-agenda.html`,
  selector: 'modal-agenda',
})
export class ModalAgenda {
  public agenda;
  constructor(public platform: Platform,public params: NavParams,public viewCtrl: ViewController) {
    this.agenda = this.params.get('objeto_agenda');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}