import {Injectable} from "@angular/core";
import { Storage } from '@ionic/storage';

@Injectable()
export class ServiceAgenda {
  public agenda = [];

  constructor(public storage: Storage) {
    this.atualizaAgenda();
  }

  atualizaAgenda() {

      this.storage.get('agenda').then((agendaStorage) => {
          var agendaTemp = JSON.parse(agendaStorage);
          this.agenda = agendaTemp;
      });

  }

  getAgenda() {
    return this.agenda;
  }

}
