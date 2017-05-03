import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ReagentDetailPage} from "../reagent-detail/reagent-detail";

@Component({
    selector: 'page-reagent-list',
    templateUrl: 'reagent-list.html',
})
export class ReagentListPage {

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams
    ) {}

    goReagentDetail(){
        this.navCtrl.push(ReagentDetailPage);
    }

}
