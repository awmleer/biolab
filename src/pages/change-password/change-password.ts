import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AccountService} from '../../services/account.service';
import {ToastService} from '../../services/toast.service';


@IonicPage()
@Component({
  selector: 'page-change-password',
  templateUrl: 'change-password.html',
})
export class ChangePasswordPage {
  oldPassword: string = '';
  newPassword: string = '';
  newPasswordConfirm: string = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private accountSvc: AccountService,
    private toastSvc: ToastService,
  ) {}

  async submit() {
    await this.accountSvc.changePassword(this.oldPassword, this.newPassword);
    await this.toastSvc.toast('修改成功，请重新登录');
    await this.navCtrl.pop();
  }

}
