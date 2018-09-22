import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BbsService} from '../../services/bbs.service'
import {PostGroup} from '../../classes/bbs'
import {BbsDetailPage} from '../bbs-detail/bbs-detail'


@IonicPage()
@Component({
  selector: 'page-bbs-post-add',
  templateUrl: 'bbs-post-add.html',
})
export class BbsPostAddPage {

  groups: PostGroup[] = [];

  title: string;
  content: string;
  groupId: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private bbsSvc: BbsService,
  ) {}

  async ionViewWillLoad() {
    this.groups = await this.bbsSvc.getGroups();
  }

  async submit() {
    const postId = await this.bbsSvc.addPost(this.title, this.content, this.groupId, []);
    this.navCtrl.pop();
    this.navCtrl.push(BbsDetailPage, {
      'postId':postId
    });
  }

}
