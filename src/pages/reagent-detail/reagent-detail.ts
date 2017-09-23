import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ReagentDetail} from "../../classes/reagent";

@Component({
    selector: 'page-reagent-detail',
    templateUrl: 'reagent-detail.html',
})
export class ReagentDetailPage {

  reagent:ReagentDetail;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams
    ) {}

}
