import {Injectable} from "@angular/core";
import { Storage } from '@ionic/storage';

@Injectable()
export class ServiceFavoritos {
  public favs;

  constructor(public storage: Storage) {
    this.favs = [];
    this.atualizaFavoritos();
  }

  atualizaFavoritos() {
    this.storage.get('favs').then((data) => {
        this.favs = JSON.parse(data) || [];
    }, (error) => {
        console.log("ERROR: " + JSON.stringify(error));
    });
  }

  getFavoritos() {
    return this.favs;
  }

  cadastraFavorito(idAgenda) {
    if( this.favs.indexOf(idAgenda) == -1 ) {
      this.favs.push(idAgenda);
      this.storage.set('favs', JSON.stringify(this.favs));
    }
  }

  removeFavorito(idAgenda) {
    this.favs = this.favs.filter((fav) => {
      return fav != idAgenda;
    }, idAgenda);
    this.storage.set('favs', JSON.stringify(this.favs));
  }
}
