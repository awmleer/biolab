import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AccountService} from '../../services/account.service';


@IonicPage()
@Component({
  selector: 'page-user-info',
  templateUrl: 'user-info.html',
})
export class UserInfoPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public accountSvc: AccountService,
  ) {}

  get user() {
    return this.accountSvc.user;
  }

}
