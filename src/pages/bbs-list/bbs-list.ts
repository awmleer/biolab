import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {PostBrief} from "../../classes/post";
import {BbsService} from "../../services/bbs.service";
import {BbsDetailPage} from "../bbs-detail/bbs-detail";
import {Page} from "../../classes/page";
import {BbsPostAddPage} from "../bbs-post-add/bbs-post-add";


@IonicPage()
@Component({
  selector: 'page-bbs-list',
  templateUrl: 'bbs-list.html',
})
export class BbsListPage {

  posts:PostBrief[]=[];
  currentPage:number;
  totalPageCount:number;
  totalPostCount:number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private bbsSvc: BbsService,
  ) {}

  ionViewWillEnter() {
    this.posts=[];
    this.currentPage = 1;
    this.totalPageCount=0;
    this.totalPostCount=-1;
    this.loadMore().catch(() => {
      this.navCtrl.pop()
    });
  }

  viewDetail(postId:number){
    this.navCtrl.push(BbsDetailPage,{
      'postId':postId
    });
  }

  async loadMore(){
    // console.log(this.currentPage);
    return await this.bbsSvc.postList(this.currentPage, 'hot').then((page:Page<PostBrief>)=>{
      this.currentPage++;
      this.totalPageCount=page.totalPageCount;
      this.totalPostCount=page.totalItemCount;
      this.posts.push.apply(this.posts,page.items);
    });
  }

  addPost(){
    this.navCtrl.push(BbsPostAddPage);
  }

}

