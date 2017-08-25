import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ReagentListPage} from "../reagent-list/reagent-list";

@Component({
    selector: 'page-search-advance',
    templateUrl: 'search-advance.html',
})
export class SearchAdvancePage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    advanceSearch(){
        // this.navCtrl.push(ReagentListPage);
    }


}
