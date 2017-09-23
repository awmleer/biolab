import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SearchBasicPage} from "../search-basic/search-basic";
import {ReagentListPage} from "../reagent-list/reagent-list";
import {ReagentLabel} from "../../classes/reagent-label";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'page-reagent',
  templateUrl: 'reagent.html'
})
export class ReagentPage {
  rootLabels:ReagentLabel[];

  constructor(
    public navCtrl: NavController,
    private apiSvc: ApiService,
  ) {}

  ionViewWillEnter(){
    this.apiSvc.get(`/reagent/label/rootLevel/`).then(data=>{
      this.rootLabels=data;
    });
  }

  goSearchBasic(){
    this.navCtrl.push(SearchBasicPage,{
      type:'reagent'
    });
  }

  goSearchAdvance(){
    // this.navCtrl.push(SearchAdvancePage);
  }

  goReagentList(){
    this.navCtrl.push(ReagentListPage);
  }



}
