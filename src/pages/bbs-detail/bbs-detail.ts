import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {BbsService} from "../../services/bbs.service";
import {PostDetail} from "../../classes/post";
import {BbsReplyTextPage} from "../bbs-reply-text/bbs-reply-text";


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
    private modalCtrl: ModalController,
  ) {}

  get postId():number{
    return this.navParams.get('postId');
  }

  ionViewWillLoad() {
    this.fetchPost();
  }

  fetchPost(){
    this.bbsSvc.postDetail(this.postId).then((post) => {
      this.post=post;
    });
  }

  replyText(){
    let modal = this.modalCtrl.create(BbsReplyTextPage,{
      postId: this.post.id
    });
    modal.present();
    modal.onWillDismiss(() => {
      this.fetchPost();
    });
  }

}
