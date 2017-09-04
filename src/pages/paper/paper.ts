import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SearchBasicPage} from "../search-basic/search-basic";

import 'rxjs/add/operator/toPromise'
import {PaperLabelsPage} from "../paper-labels/paper-labels";
import {PaperLabel} from "../../classes/paper-label";
import {ApiService} from "../../services/api.service";
import {PaperSearchAdvancePage} from "../paper-search-advance/paper-search-advance";


@Component({
    selector: 'page-paper',
    templateUrl: 'paper.html'
})
export class PaperPage {
    rootLabels:PaperLabel[]=[];

    constructor(
        private navCtrl: NavController,
        private apiSvc: ApiService,
    ) {}

    ionViewWillEnter(){
        this.apiSvc.get(`/paper/label/rootLevel/`).then(data=>{
            this.rootLabels=data;
        });
    }

    goSearchBasic(){
        this.navCtrl.push(SearchBasicPage,{
            type:'paper'
        });
    }

    goSearchAdvance(){
        this.navCtrl.push(PaperSearchAdvancePage);
    }

    goChildrenLabels(label){
        this.navCtrl.push(PaperLabelsPage,{
            parentLabel:label
        });
    }

    // goPaperList(){
    //     this.navCtrl.push(PaperListPage);
    // }



}
