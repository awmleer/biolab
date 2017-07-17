import {Component, ViewChild} from '@angular/core';
import {Label, NavController, NavParams, Searchbar} from 'ionic-angular';
import {ReagentListPage} from "../reagent-list/reagent-list";
import {ReagentDetailPage} from "../reagent-detail/reagent-detail";
import {PaperService} from "../../services/paper.service";
import {PaperListPage} from "../paper-list/paper-list";
import {NativeStorage} from "@ionic-native/native-storage";

@Component({
    selector: 'page-search-basic',
    templateUrl: 'search-basic.html',
})
export class SearchBasicPage {
    searchInput:string='';
    searchType:string='';
    searchField:"all" | "subject" | "title" | "keyword" | "teacher" | "content" | "publishYear"='all';
    historyItems:string[]=[];

    // labels:Label[]=[];

    @ViewChild('searchbar') searchbar:Searchbar;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private storage: NativeStorage,
        private paperService: PaperService
    ) {
        this.searchType=this.navParams.get('type');
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

    goSearch(text?:string){
        if (!text) {
            text=this.searchInput;
            this.addHistoryItems(this.searchInput);
        }
        if (this.searchType == 'paper') {
            this.navCtrl.push(PaperListPage,{
                'pageFrom': 'search',
                'searchText': text
            });
        }
    }

    ionViewWillLoad(){
        this.getHistoryItems();

    }

    getHistoryItems(){
        let reference='';
        if (this.searchType == 'paper') {
            reference='searchHistoryPaper';
        }else{
            reference='searchHistoryReagent';
        }
        this.storage.getItem(reference).then(data=>{
            if (data) {
                this.historyItems=data;
            }
        });
    }

    clearHistory(){
        this.historyItems=[];
        let reference='';
        if (this.searchType == 'paper') {
            reference='searchHistoryPaper';
        }else{
            reference='searchHistoryReagent';
        }
        this.storage.setItem(reference,[]);
    }

    addHistoryItems(item){
        let reference='';
        if (this.searchType == 'paper') {
            reference='searchHistoryPaper';
        }else{
            reference='searchHistoryReagent';
        }
        this.historyItems.unshift(item);
        if (this.historyItems.length > 5) {
            this.historyItems.splice(-1,1);
        }
        this.storage.setItem(reference,this.historyItems);
    }

    ionViewDidLoad(){
        // if (this.searchType == 'paper') {
        //     this.paperService.getLabelList().then(labels=>{
        //         this.labels=labels;
        //     });
        // }
        // console.log(this.navParams.get('type'));
    }


}
