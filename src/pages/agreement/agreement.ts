import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Storage} from '@ionic/storage';

/**
 * Generated class for the AgreementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agreement',
  templateUrl: 'agreement.html',
})
export class AgreementPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public storage: Storage,
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgreementPage');
  }

  accept() {
    this.storage.set('agreement', 'accepted');
    this.navCtrl.pop();
  }

  decline() {
    this.alertCtrl.create({
      title: '提示',
      subTitle: '您需要先同意用户协议才能使用app',
      buttons: ['OK']
    }).present()
  }

}
