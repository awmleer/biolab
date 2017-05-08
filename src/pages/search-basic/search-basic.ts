import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, Searchbar} from 'ionic-angular';
import {ReagentListPage} from "../reagent-list/reagent-list";
import {ReagentDetailPage} from "../reagent-detail/reagent-detail";

@Component({
    selector: 'page-search-basic',
    templateUrl: 'search-basic.html',
})
export class SearchBasicPage {
    searchInput:string='';
    searchType:string='';

    @ViewChild('searchbar') searchbar:Searchbar;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams
    ) {}

    goReagentList(){
        this.navCtrl.push(ReagentListPage);
    }

    goReagentDetail(){
        this.navCtrl.push(ReagentDetailPage);
    }

    ionViewDidEnter(){
        this.searchbar.setFocus();
        this.searchType=this.navParams.get('type');
        // console.log(this.navParams.get('type'));
    }


}
