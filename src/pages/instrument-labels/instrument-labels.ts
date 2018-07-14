import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {InstrumentLabel} from "../../classes/instrument-label";
import {ApiService} from "../../services/api.service";
import {InstrumentListPage} from "../instrument-list/instrument-list";


@IonicPage()
@Component({
  selector: 'page-instrument-labels',
  templateUrl: 'instrument-labels.html',
})
export class InstrumentLabelsPage {

  parentLabel:InstrumentLabel;
  labels:InstrumentLabel[]=[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private apiSvc: ApiService,
  ) {}

  ionViewWillLoad(){
    console.log('will load');
    this.parentLabel=this.navParams.get('parentLabel');
    this.getChildrenLabels();
  }

  getChildrenLabels(){
    this.apiSvc.get(`/instrument/label/${this.parentLabel.id}/children/`).then(data=>{
      this.labels=data;
    });
  }

  labelClick(label){
    if (label.hasChildren) {
      this.goChildrenLabels(label);
    }else {
      this.goInstrumentList(label);
    }
  }

  goInstrumentList(label){
    this.navCtrl.push(InstrumentListPage,{
      pageFrom:'label',
      param:{
        labelId:label.id,
        labelName:label.name
      }
    });
  }

  goChildrenLabels(label){
    this.navCtrl.push(InstrumentLabelsPage,{
      parentLabel:label
    });
  }

}
