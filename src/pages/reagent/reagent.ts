import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SearchBasicPage} from "../search-basic/search-basic";

@Component({
    selector: 'page-reagent',
    templateUrl: 'reagent.html'
})
export class ReagentPage {
    constructor(
        public navCtrl: NavController
    ) {}

    goSearchBasic(){
        this.navCtrl.push(SearchBasicPage);
    }



}
