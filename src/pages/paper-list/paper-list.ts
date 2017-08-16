import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {PaperDetailPage} from "../paper-detail/paper-detail";
import {PaperLabel} from "../../classes/paper-label";
import {PaperService} from "../../services/paper.service";
import {GetPapersResult, PaperBrief} from "../../classes/paper";
import {ShareService} from "../../services/share.service";


@Component({
    selector: 'currentPage-paper-list',
    templateUrl: 'paper-list.html'
})
export class PaperListPage {
    pageFrom:'searchBasic' | 'label';
    papers:PaperBrief[]=[];
    currentPage:number=0;
    totalPageCount:number=0;
    totalPaperCount:number=-1;
    param:object;
    paperCardBrief: boolean=false;

    constructor(
        private navCtrl: NavController,
        private navParams: NavParams,
        private paperService: PaperService,
        private shareSvc: ShareService
    ) {
        this.pageFrom=navParams.get('pageFrom');
        this.param=navParams.get('param');
    }

    ionViewWillLoad(){
        this.getMorePapers();
    }

    getMorePapers(){
        if (this.pageFrom == 'label') {
            this.paperService.getPapersByLabel(this.param['labelId'],this.currentPage).then((result:GetPapersResult)=>{
                this.currentPage++;
                this.totalPageCount=result.totalPageCount;
                this.totalPaperCount=result.totalPaperCount;
                this.papers.push.apply(this.papers,result.papers);
            });
        }else if (this.pageFrom == 'searchBasic') {
            this.paperService.getPapersBySearchBasic(this.param['searchText'],this.param['searchField'],this.currentPage).then((result:GetPapersResult)=>{
                this.currentPage++;
                this.totalPageCount=result.totalPageCount;
                this.totalPaperCount=result.totalPaperCount;
                this.papers.push.apply(this.papers,result.papers);
            });
        }
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
