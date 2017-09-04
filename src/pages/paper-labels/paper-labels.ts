import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import 'rxjs/add/operator/toPromise'
import {PaperLabel} from "../../classes/paper-label";
import {PaperListPage} from "../paper-list/paper-list";
import {ApiService} from "../../services/api.service";



@Component({
    selector: 'page-paper-labels',
    templateUrl: 'paper-labels.html',
})
export class PaperLabelsPage {
    parentLabel:PaperLabel;
    labels:PaperLabel[]=[];

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
                labelId:label.id
            }
        });
    }

    goChildrenLabels(label){
        this.navCtrl.push(PaperLabelsPage,{
            parentLabel:label
        });
    }

}
