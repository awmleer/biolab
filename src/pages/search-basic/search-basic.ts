import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, Searchbar} from 'ionic-angular';
import {ReagentListPage} from "../reagent-list/reagent-list";
import {ReagentDetailPage} from "../reagent-detail/reagent-detail";
import {PaperService} from "../../services/paper.service";

@Component({
    selector: 'page-search-basic',
    templateUrl: 'search-basic.html',
})
export class SearchBasicPage {
    searchInput:string='';
    searchType:string='';

    labels:any[]=[];

    @ViewChild('searchbar') searchbar:Searchbar;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private paperService: PaperService
    ) {
        this.searchType=this.navParams.get('type');
    }

    checkFocus(){
        console.log('focus');
    }

    checkBlur(){
        console.log('blur');
    }

    goReagentList(){
        this.navCtrl.push(ReagentListPage);
    }

    goReagentDetail(){
        this.navCtrl.push(ReagentDetailPage);
    }

    ionViewDidEnter(){
        this.searchbar.setFocus();
        if (this.searchType == 'paper') {
            this.paperService.getLabelList().then(labels=>{
                this.labels=labels;
                console.log(this.labels);
            });
        }
        // console.log(this.navParams.get('type'));
    }


}
