import {Component, ViewChild} from '@angular/core';
import {Label, NavController, NavParams, Searchbar} from 'ionic-angular';
import {ReagentListPage} from "../reagent-list/reagent-list";
import {ReagentDetailPage} from "../reagent-detail/reagent-detail";
import {PaperService} from "../../services/paper.service";
import {PaperListPage} from "../paper-list/paper-list";
import {Storage} from "@ionic/storage";
import {InstrumentListPage} from '../instrument-list/instrument-list'

@Component({
  selector: 'page-search-basic',
  templateUrl: 'search-basic.html',
})
export class SearchBasicPage {
  searchInput:string='';
  searchField:string;
  historyItems:string[]=[];

  // labels:Label[]=[];

  @ViewChild('searchbar') searchbar:Searchbar;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage,
    private paperService: PaperService
  ) {
    if (this.searchType == 'paper') {
      this.searchField='all';
    }else if (this.searchType == 'instrument') {
      this.searchField='chineseName';
    }else{
      this.searchField='name';
    }
  }

  get searchType():'reagent'|'paper'|'instrument'{
    return this.navParams.get('type');
  }

  goSearch(text?:string){
    if (!text) {
      text=this.searchInput;
      this.addHistoryItems(this.searchInput);
    }
    if (this.searchType == 'paper') {
      this.navCtrl.push(PaperListPage,{
        'pageFrom': 'search',
        'param':[{
          field:this.searchField,
          value:text
        }]
      });
    }else if (this.searchType == 'instrument') {
      this.navCtrl.push(InstrumentListPage,{
        'pageFrom': 'search',
        'param':[{
          field:this.searchField,
          value:text
        }]
      });
    }else{
      this.navCtrl.push(ReagentListPage,{
        'pageFrom': 'search',
        'param':[{
          field:this.searchField,
          value:text
        }]
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
    }else if (this.searchType == 'instrument') {
      reference='searchHistoryInstrument';
    }else{
      reference='searchHistoryReagent';
    }
    this.storage.get(reference).then(data=>{
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
    }else if (this.searchType == 'instrument') {
      reference='searchHistoryInstrument';
    }else{
      reference='searchHistoryReagent';
    }
    this.storage.set(reference,[]);
  }

  addHistoryItems(item){
    if (this.historyItems.length && this.historyItems[0] === item) return;
    let reference='';
    if (this.searchType == 'paper') {
      reference='searchHistoryPaper';
    }else if (this.searchType == 'instrument') {
      reference='searchHistoryInstrument';
    }else{
      reference='searchHistoryReagent';
    }
    this.historyItems.unshift(item);
    if (this.historyItems.length > 10) {
      let delta=this.historyItems.length-10;
      this.historyItems.splice(-delta,delta);
    }
    this.storage.set(reference,this.historyItems);
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
