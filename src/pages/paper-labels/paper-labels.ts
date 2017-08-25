import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Http} from "@angular/http";

import 'rxjs/add/operator/toPromise'
import {CONST} from "../../app/const";
import {PaperLabel} from "../../classes/paper-label";
import {PaperListPage} from "../paper-list/paper-list";



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
        private http: Http
    ) {}

    ionViewWillLoad(){
        console.log('will load');
        this.parentLabel=this.navParams.get('parentLabel');
        this.getChildrenLabels();
    }

    getChildrenLabels(){
        this.http.get(`${CONST.apiUrl}/paper/label/${this.parentLabel.id}/children/`).toPromise().then(response=>{
            this.labels=response.json();
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
