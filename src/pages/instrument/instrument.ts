import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SearchBasicPage} from "../search-basic/search-basic";
import {InstrumentListPage} from "../instrument-list/instrument-list";
import {InstrumentLabel} from "../../classes/instrument-label";
import {ApiService} from "../../services/api.service";
import {InstrumentLabelsPage} from "../instrument-labels/instrument-labels";

@Component({
  selector: 'page-instrument',
  templateUrl: 'instrument.html'
})
export class InstrumentPage {
  rootLabels:InstrumentLabel[];

  constructor(
    public navCtrl: NavController,
    private apiSvc: ApiService,
  ) {}

  ionViewWillEnter(){
    this.apiSvc.get(`/instrument/label/rootLevel/`).then(data=>{
      this.rootLabels=data;
    });
  }

  goSearchBasic(){
    this.navCtrl.push(SearchBasicPage,{
      type:'instrument'
    });
  }

  goSearchAdvance(){
    // this.navCtrl.push(SearchAdvancePage);
  }

  goInstrumentList(){
    this.navCtrl.push(InstrumentListPage);
  }

  goChildrenLabels(label){
    this.navCtrl.push(InstrumentLabelsPage,{
      parentLabel:label
    });
  }


}
