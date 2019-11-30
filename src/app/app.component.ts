import { Component } from '@angular/core';
import {Config, ModalController, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import {AccountService} from "../services/account.service";
import {AgreementPage} from '../pages/agreement/agreement';
import {Storage} from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    config:Config,
    accountSvc: AccountService,
    modalCtrl: ModalController,
    storage: Storage,
  ) {
    config.set('ios','backButtonText','返回');
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      accountSvc.getUserInfo();
    });
    storage.get('agreement').then((value) => {
      if (value !== 'accepted') {
        modalCtrl.create(AgreementPage).present();
      }
    });
  }
}
