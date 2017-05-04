import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SearchBasicPage} from "../search-basic/search-basic";
import {ReagentListPage} from "../reagent-list/reagent-list";
import {SearchAdvancePage} from "../search-advance/search-advance";

@Component({
    selector: 'page-paper',
    templateUrl: 'paper.html'
})
export class PaperPage {
    constructor(
        public navCtrl: NavController
    ) {}

    goSearchBasic(){
        this.navCtrl.push(SearchBasicPage);
    }

    goSearchAdvance(){
        this.navCtrl.push(SearchAdvancePage);
    }

    goReagentList(){
        this.navCtrl.push(ReagentListPage);
    }



}
