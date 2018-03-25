import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {PostBrief} from "../../classes/post";
import {BbsService} from "../../services/bbs.service";
import {BbsDetailPage} from "../bbs-detail/bbs-detail";
import {Page} from "../../classes/page";


@IonicPage()
@Component({
  selector: 'page-bbs-list',
  templateUrl: 'bbs-list.html',
})
export class BbsListPage {

  posts:PostBrief[]=[];
  currentPage:number = 1;
  totalPageCount:number=0;
  totalPostCount:number=-1;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private bbsSvc: BbsService,
  ) {}

  ionViewWillLoad() {
    this.loadMore();
  }

  viewDetail(postId:number){
    this.navCtrl.push(BbsDetailPage,{
      'postId':postId
    });
  }

  loadMore(){
    this.bbsSvc.postList(this.currentPage, 'hot').then((page:Page<PostBrief>)=>{
      this.currentPage++;
      this.totalPageCount=page.totalPageCount;
      this.totalPostCount=page.totalItemCount;
      this.posts.push.apply(this.posts,page.items);
    });
  }

}
