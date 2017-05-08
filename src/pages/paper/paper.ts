import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SearchBasicPage} from "../search-basic/search-basic";
import {SearchAdvancePage} from "../search-advance/search-advance";
import {PaperListPage} from "../paper-list/paper-list";

@Component({
    selector: 'page-paper',
    templateUrl: 'paper.html'
})
export class PaperPage {
    constructor(
        public navCtrl: NavController
    ) {}

    goSearchBasic(){
        this.navCtrl.push(SearchBasicPage,{
            type:'paper'
        });
    }

    goSearchAdvance(){
        this.navCtrl.push(SearchAdvancePage);
    }

    goPaperList(){
        this.navCtrl.push(PaperListPage);
    }



}
