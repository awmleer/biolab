import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PostBrief} from "../../classes/post";
import {BbsService} from "../../services/bbs.service";


@IonicPage()
@Component({
  selector: 'page-bbs-list',
  templateUrl: 'bbs-list.html',
})
export class BbsListPage {

  posts:PostBrief[]=[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private bbsSvc: BbsService,
  ) {}

  ionViewWillLoad() {
    this.bbsSvc.postList().then((posts) => {
      this.posts=posts;
    });
  }

  viewDetail(postId:number){
    
  }

}
