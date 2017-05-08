import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SearchBasicPage} from "../search-basic/search-basic";
import {ReagentListPage} from "../reagent-list/reagent-list";
import {SearchAdvancePage} from "../search-advance/search-advance";

@Component({
    selector: 'page-reagent',
    templateUrl: 'reagent.html'
})
export class ReagentPage {
    constructor(
        public navCtrl: NavController
    ) {}

    goSearchBasic(){
        this.navCtrl.push(SearchBasicPage,{
            type:'reagent'
        });
    }

    goSearchAdvance(){
        this.navCtrl.push(SearchAdvancePage);
    }

    goReagentList(){
        this.navCtrl.push(ReagentListPage);
    }



}
