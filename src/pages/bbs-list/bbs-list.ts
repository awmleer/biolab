import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PostBrief} from "../../classes/post";


@IonicPage()
@Component({
  selector: 'page-bbs-list',
  templateUrl: 'bbs-list.html',
})
export class BbsListPage {

  posts:PostBrief[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BbsListPage');
  }

}
