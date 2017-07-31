import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { InscritosPage } from '../pages/inscritos/inscritos';
import { AgendaPage } from '../pages/agenda/agenda';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import * as screenfull from 'screenfull';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public http: Http, public storage: Storage, public alertCtrl: AlertController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      //{ title: 'List', component: ListPage },
      { title: 'Inscritos', component: InscritosPage },
      { title: 'Agenda', component: AgendaPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.hide();
      this.showConfirm();
      this.http.get('http://www.expotec.org.br/agenda_forapp.php?checksum').subscribe((checksumResponse) => {
        this.storage.get('checksum').then((checksumStore) => {
          if( checksumStore != checksumResponse.text() ) {
              this.http.get('http://www.expotec.org.br/agenda_forapp.php').map(res => res.json()).subscribe((agendaResponse) => {
                  this.storage.set('agenda', JSON.stringify(agendaResponse));
                  console.info(agendaResponse);
                  this.splashScreen.hide();
              });
              this.storage.set('checksum', checksumResponse.text());
          }
        });
      });
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Fullscreen',
      message: 'Você permite que esse app execute em modo Fullscreen?',
      buttons: [
        {
          text: 'Discordo',
          handler: () => {
            
          }
        },
        {
          text: 'Concordo',
          handler: () => {
            if( screenfull.enabled ) {
              screenfull.toggle();
            } else {
              confirm.dismiss();
              let aviso = this.alertCtrl.create({
                title: 'Não há suporte',
                message: 'Infelizmente o seu navegador/S.O. não dá suporte para fullscreen nativo, mas você pode ativar diretamente no navegador',
                buttons: [{
                  text: 'OK',
                  handler: () => {
                    aviso.dismiss();
                  }
                }]
              });
              aviso.present();
            }
          }
        }
      ]
    });
    confirm.present();
  }
}
