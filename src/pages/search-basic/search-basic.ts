import {Component, ViewChild} from '@angular/core';
import {Label, NavController, NavParams, Searchbar} from 'ionic-angular';
import {ReagentListPage} from "../reagent-list/reagent-list";
import {ReagentDetailPage} from "../reagent-detail/reagent-detail";
import {PaperService} from "../../services/paper.service";
import {PaperListPage} from "../paper-list/paper-list";

@Component({
    selector: 'page-search-basic',
    templateUrl: 'search-basic.html',
})
export class SearchBasicPage {
    searchInput:string='';
    searchType:string='';

    labels:Label[]=[];

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

    goPaperListByLabel(label:Label){
        this.navCtrl.push(PaperListPage,{
            'pageFrom':'label',
            'label':label
        })
    }

    goSearch(){
        if (this.searchType == 'paper') {
            this.navCtrl.push(PaperListPage,{
                'pageFrom': 'search',
                'searchText': this.searchInput
            });
        }
    }

    ionViewDidLoad(){
        if (this.searchType == 'paper') {
            this.paperService.getLabelList().then(labels=>{
                this.labels=labels;
            });
        }
        // console.log(this.navParams.get('type'));
    }


}
