import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-reagent-detail',
    templateUrl: 'reagent-detail.html',
})
export class ReagentDetailPage {

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams
    ) {}

}
