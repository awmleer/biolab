import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {AccountService} from "../../services/account.service";
import {LoginPage} from "../login/login";
import {UserInfoPage} from '../user-info/user-info';

/**
 * Generated class for the MePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-me',
  templateUrl: 'me.html',
})
export class MePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public accountSvc: AccountService,
    private modalCtrl: ModalController,
  ) {}

  showLoginModal():void{
    this.modalCtrl.create(LoginPage).present();
  }

  goUserInfoPage() {
    this.navCtrl.push(UserInfoPage);
  }


}
