import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from "@angular/http";

import 'rxjs/add/operator/toPromise'
import {CONFIG} from "../../app/config";
import {PaperLabel} from "../../classes/paper-label";



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
        this.http.get(`${CONFIG.apiUrl}/paper/label/${this.parentLabel.id}/children/`).toPromise().then(response=>{
            this.labels=response.json();
        });
    }

    goChildrenLabels(label){
        this.navCtrl.push(PaperLabelsPage,{
            parentLabel:label
        });
    }

}
