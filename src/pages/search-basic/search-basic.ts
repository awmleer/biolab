import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, Searchbar} from 'ionic-angular';
import {ReagentListPage} from "../reagent-list/reagent-list";

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

    goReagentList(){
        this.navCtrl.push(ReagentListPage);
    }

    ionViewDidLoad() {
        this.searchbar.setFocus();
    }


}
