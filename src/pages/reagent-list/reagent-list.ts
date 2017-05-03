import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-reagent-list',
    templateUrl: 'reagent-list.html',
})
export class ReagentListPage {

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams
    ) {}

    ionViewDidLoad() {
        console.log('ionViewDidLoad ReagentList');
    }

}
