import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { SuperTabsModule } from 'ionic2-super-tabs';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { InscritosPage } from '../pages/inscritos/inscritos';
import { AgendaPage } from '../pages/agenda/agenda';
import { TambauPage } from '../pages/tambau/tambau';
import { BessaPage } from '../pages/bessa/bessa';
import { TabatingaPage } from '../pages/tabatinga/tabatinga';
import { TambabaPage } from '../pages/tambaba/tambaba';
import { JacumaPage } from '../pages/jacuma/jacuma';
import { LucenaPage } from '../pages/lucena/lucena';
import { ManairaPage } from '../pages/manaira/manaira';
import { Oficinas_1Page } from '../pages/oficinas-1/oficinas-1';
import { Oficinas_2Page } from '../pages/oficinas-2/oficinas-2';
import { ExpobotPage } from '../pages/expobot/expobot';
import { ServiceFavoritos } from '../pages/serviceFavoritos';
import { ServiceAgenda } from '../pages/serviceAgenda';
import { ModalAgenda } from '../pages/modal-agenda/modal-agenda';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    InscritosPage,
    AgendaPage,
    TambauPage,
    BessaPage,
    TabatingaPage,
    TambabaPage,
    JacumaPage,
    LucenaPage,
    ManairaPage,
    Oficinas_1Page,
    Oficinas_2Page,
    ExpobotPage,
    ModalAgenda,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    SuperTabsModule.forRoot(),
    IonicStorageModule.forRoot({
      name: '__mydb',
         driverOrder: ['websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    InscritosPage,
    AgendaPage,
    TambauPage,
    BessaPage,
    TabatingaPage,
    TambabaPage,
    JacumaPage,
    LucenaPage,
    ManairaPage,
    Oficinas_1Page,
    Oficinas_2Page,
    ExpobotPage,
    ModalAgenda,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ServiceFavoritos,
    ServiceAgenda,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
