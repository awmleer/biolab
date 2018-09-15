import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NoticeService} from '../../services/notice.service'
import {NoticeDetail} from '../../classes/notice'

@IonicPage()
@Component({
  selector: 'page-notice-detail',
  templateUrl: 'notice-detail.html',
})
export class NoticeDetailPage {

  notice: NoticeDetail;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private noticeSvc: NoticeService,
  ) {}

  get noticeId():number{
    return this.navParams.get('noticeId');
  }

  ionViewDidLoad() {
    this.fetchNotice();
  }

  async fetchNotice() {
    this.notice = await this.noticeSvc.noticeDetail(this.noticeId);
  }

}
