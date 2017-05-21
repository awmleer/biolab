import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {PaperDetailPage} from "../paper-detail/paper-detail";


@Component({
    selector: 'page-paper-list',
    templateUrl: 'paper-list.html',
})
export class PaperListPage {

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams
    ) {}

    goPaperDetail(){
        this.navCtrl.push(PaperDetailPage);
    }

}
