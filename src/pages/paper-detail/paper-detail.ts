import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-paper-detail',
    templateUrl: 'paper-detail.html',
})
export class PaperDetailPage {
    Ashowing:boolean=false;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }
    toggleA(){
        this.Ashowing=!this.Ashowing;
    }

}
