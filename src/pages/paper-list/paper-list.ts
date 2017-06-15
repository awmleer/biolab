import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {PaperDetailPage} from "../paper-detail/paper-detail";
import {PaperLabel} from "../../classes/paper-label";
import {PaperService} from "../../services/paper.service";
import {PaperBrief} from "../../classes/paper";


@Component({
    selector: 'page-paper-list',
    templateUrl: 'paper-list.html'
})
export class PaperListPage {
    pageFrom:string;
    fromLabel:PaperLabel;
    papers:PaperBrief[]=[];
    searchText: string;

    constructor(
        private navCtrl: NavController,
        private navParams: NavParams,
        private paperService: PaperService
    ) {
        this.pageFrom=navParams.get('pageFrom');
        if (this.pageFrom == 'label') {
            this.fromLabel=navParams.get('label');
        }else if (this.pageFrom == 'search'){
            this.searchText=navParams.get('searchText');
        }
    }

    ionViewWillLoad(){
        if (this.pageFrom == 'label') {
            this.paperService.getPapersByLabel(this.fromLabel).then(papers=>{
                this.papers=papers;
            });
        }else if (this.pageFrom == 'search') {
            this.paperService.searchPaper(this.searchText).then(papers=>{
                this.papers=papers;
            });
        }
    }

    goPaperDetail(paper){
        this.navCtrl.push(PaperDetailPage,{
            paperId:paper.id
        });
    }

}
