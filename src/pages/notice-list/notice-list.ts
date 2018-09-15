import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NoticeService} from '../../services/notice.service'
import {Page} from '../../classes/page'
import {NoticeBrief} from '../../classes/notice'
import {NoticeDetailPage} from '../notice-detail/notice-detail'

@IonicPage()
@Component({
  selector: 'page-notice-list',
  templateUrl: 'notice-list.html',
})
export class NoticeListPage {

  pageNumber: number = 1;
  page: Page<NoticeBrief>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private noticeSvc: NoticeService,
  ) {}

  ionViewDidLoad() {
    this.loadPage();
  }

  async doInfinite() {
    await this.loadPage();
  }

  async loadPage() {
    this.page = await this.noticeSvc.noticeList(this.pageNumber);
    this.pageNumber++;
  }

  viewDetail(noticeId: number) {
    this.navCtrl.push(NoticeDetailPage, {
      noticeId
    });
  }

}
