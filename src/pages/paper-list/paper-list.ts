import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {PaperDetailPage} from "../paper-detail/paper-detail";
import {PaperLabel} from "../../classes/paper-label";
import {PaperService} from "../../services/paper.service";
import {Paper} from "../../classes/paper";


@Component({
    selector: 'page-paper-list',
    templateUrl: 'paper-list.html',
})
export class PaperListPage {
    pageFrom:string;
    fromLabel:PaperLabel;
    papers:Paper[];

    constructor(
        private navCtrl: NavController,
        private navParams: NavParams,
        private paperService: PaperService
    ) {
        this.pageFrom=navParams.get('pageFrom');
        if (this.pageFrom == 'label') {
            this.fromLabel=navParams.get('label');
        }
    }

    ionViewWillLoad(){
        if (this.pageFrom == 'label') {
            this.paperService.getPapersByLabel(this.fromLabel).then(papers=>{
                this.papers=papers;
            });
        }
    }

    goPaperDetail(){
        this.navCtrl.push(PaperDetailPage);
    }

}
