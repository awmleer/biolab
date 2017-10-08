import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BbsService} from "../../services/bbs.service";
import {PostDetail} from "../../classes/post";


@IonicPage()
@Component({
  selector: 'page-bbs-detail',
  templateUrl: 'bbs-detail.html',
})
export class BbsDetailPage {

  post:PostDetail;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private bbsSvc: BbsService,
  ) {}

  get postId():number{
    return this.navParams.get('postId');
  }

  ionViewWillLoad() {
    this.bbsSvc.postDetail(this.postId).then((post) => {
      this.post=post;
    });
  }

}
