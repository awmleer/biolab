import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ReagentLabel} from "../../classes/reagent-label";
import {ApiService} from "../../services/api.service";
import {ReagentListPage} from "../reagent-list/reagent-list";


@IonicPage()
@Component({
  selector: 'page-reagent-labels',
  templateUrl: 'reagent-labels.html',
})
export class ReagentLabelsPage {

  parentLabel:ReagentLabel;
  labels:ReagentLabel[]=[];

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
    this.apiSvc.get(`/reagent/label/${this.parentLabel.id}/children/`).then(data=>{
      this.labels=data;
    });
  }

  labelClick(label){
    if (label.hasChildren) {
      this.goChildrenLabels(label);
    }else {
      this.goReagentList(label);
    }
  }

  goReagentList(label){
    this.navCtrl.push(ReagentListPage,{
      pageFrom:'label',
      param:{
        labelId:label.id,
        labelName:label.name
      }
    });
  }

  goChildrenLabels(label){
    this.navCtrl.push(ReagentLabelsPage,{
      parentLabel:label
    });
  }

}
