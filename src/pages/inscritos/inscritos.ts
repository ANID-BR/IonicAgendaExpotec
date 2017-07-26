import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Searchbar } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-inscritos',
  templateUrl: 'inscritos.html'
})
export class InscritosPage {
  @ViewChild('searchbar') searchbar:Searchbar;
  showSearch = false;
  inscritos = [];
  listaInscritos = [];
  loadingCtrl;
  http;
  constructor(public navCtrl: NavController, http: Http, loadingCtrl: LoadingController) {
    this.http = http;
    this.loadingCtrl = loadingCtrl;
    this.initialize();
  }

  initialize() {
    var loading = this.loadingCtrl.create({
      content: 'Por favor, aguarde...'
    });
    loading.present().then(() => {
      this.http.get('http://www.expotec.org.br/inscritos-json.html').map(res => res.json()).subscribe(data => {
          this.inscritos = data.data;
          this.listaInscritos = this.inscritos;
          loading.dismiss();
      });
    });
  }

  toggleSearchbar() {
    this.showSearch = !this.showSearch;
    if( this.showSearch )
      setTimeout(() => {this.searchbar.setFocus()});
  }

  pesquisar(ev: any) {

    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.listaInscritos = this.inscritos.filter((item) => {
        return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    } else {
      this.listaInscritos = this.inscritos;
    }
  }
}
