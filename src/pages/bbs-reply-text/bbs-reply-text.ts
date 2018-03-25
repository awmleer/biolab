import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BbsService} from "../../services/bbs.service";
import {ToastService} from "../../services/toast.service";



@IonicPage()
@Component({
  selector: 'page-bbs-reply-text',
  templateUrl: 'bbs-reply-text.html',
})
export class BbsReplyTextPage {

  content:string = '';

  constructor(
    public navCtrl: NavController,
    public toastSvc: ToastService,
    public navParams: NavParams,
    private bbsSvc: BbsService,
  ) {}

  get postId():number{
    return this.navParams.get('postId');
  }

  submit(){
    this.bbsSvc.replyText(this.postId, this.content).then(() => {
      this.toastSvc.toast('回复成功');
      this.navCtrl.pop();
    });
  }

}
