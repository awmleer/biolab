import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {PaperDetailPage} from "../paper-detail/paper-detail";
import {PaperService} from "../../services/paper.service";
import {GetPapersResult, PaperBrief} from "../../classes/paper";
import {ShareService} from "../../services/share.service";


@Component({
  selector: 'currentPage-paper-list',
  templateUrl: 'paper-list.html'
})
export class PaperListPage {
  papers:PaperBrief[]=[];
  currentPage:number=1;
  totalPageCount:number=0;
  totalPaperCount:number=-1;
  paperCardBrief: boolean=false;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private paperService: PaperService,
    private shareSvc: ShareService
  ) {}

  get pageFrom():('search' | 'label'){
    return this.navParams.get('pageFrom');
  }

  get param():any{
    return this.navParams.get('param');
  }

  ionViewWillLoad(){
    this.getMorePapers();
  }

  getMorePapers(){
    if (this.pageFrom == 'label') {
      this.paperService.getPapersByLabel(this.param['labelId'],this.currentPage).then((result:GetPapersResult)=>{
        this.handleGetPapersResult(result);
      });
    }else if (this.pageFrom == 'search') {
      this.paperService.getPapersBySearch(this.param,this.currentPage).then((result:GetPapersResult)=>{
        this.handleGetPapersResult(result);
      });
    }
  }

  handleGetPapersResult(result:GetPapersResult){
    this.currentPage++;
    this.totalPageCount=result.totalPageCount;
    this.totalPaperCount=result.totalPaperCount;
    this.papers.push.apply(this.papers,result.papers);
  }

  goPaperDetail(paper){
    this.navCtrl.push(PaperDetailPage,{
      paperId:paper.id
    });
  }

  sharePaper(paper){
    this.shareSvc.sharePaper(paper.id,paper.title);
  }

}
