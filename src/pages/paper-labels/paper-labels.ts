import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import 'rxjs/add/operator/toPromise'
import {PaperListPage} from "../paper-list/paper-list";
import {ApiService} from "../../services/api.service";
import {Label} from '../../classes/label';



@Component({
  selector: 'page-paper-labels',
  templateUrl: 'paper-labels.html',
})
export class PaperLabelsPage {
  parentLabel:Label;
  labels:Label[]=[];

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
    this.apiSvc.get(`/paper/label/${this.parentLabel.id}/children/`).then(data=>{
      this.labels=data;
    });
  }

  labelClick(label){
    if (label.hasChildren) {
      this.goChildrenLabels(label);
    }else {
      this.goPaperList(label);
    }
  }

  goPaperList(label){
    this.navCtrl.push(PaperListPage,{
      pageFrom:'label',
      param:{
        labelId:label.id,
        labelName:label.name
      }
    });
  }

  goChildrenLabels(label){
    this.navCtrl.push(PaperLabelsPage,{
      parentLabel:label
    });
  }

}
