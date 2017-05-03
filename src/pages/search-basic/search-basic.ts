import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, Searchbar} from 'ionic-angular';

@Component({
    selector: 'page-search-basic',
    templateUrl: 'search-basic.html',
})
export class SearchBasicPage {
    searchInput:string='';

    @ViewChild('searchbar') searchbar:Searchbar;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams
    ) {}

    ionViewDidLoad() {
        this.searchbar.setFocus();
        console.log('ionViewDidLoad SearchBasicPage');
    }


}
