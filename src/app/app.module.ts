import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {SQLite}	from '@ionic-native/sqlite'
import { DatabaseProvider } from '../providers/database/database';
import { ClienteProvider } from '../providers/cliente/cliente';
import { AdicionaClientePage } from '../pages/adiciona-cliente/adiciona-cliente';
import { AdicionaClientePageModule } from '../pages/adiciona-cliente/adiciona-cliente.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AdicionaClientePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AdicionaClientePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SQLite,
    DatabaseProvider,
    ClienteProvider
  ]
})
export class AppModule {}
