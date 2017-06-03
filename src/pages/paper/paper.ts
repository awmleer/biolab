import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SearchBasicPage} from "../search-basic/search-basic";
import {SearchAdvancePage} from "../search-advance/search-advance";
import {PaperListPage} from "../paper-list/paper-list";
import {Http} from "@angular/http";
import {CONFIG} from "../../app/config";

import 'rxjs/add/operator/toPromise'
import {PaperLabelsPage} from "../paper-labels/paper-labels";


@Component({
    selector: 'page-paper',
    templateUrl: 'paper.html'
})
export class PaperPage {
    rootLabels:any[]=[];

    constructor(
        private navCtrl: NavController,
        private http: Http
    ) {}

    ionViewWillEnter(){
        this.http.get(`${CONFIG.apiUrl}/paper/label/rootLevel/`).toPromise().then(response=>{
            this.rootLabels=response.json();
        });
    }

    goSearchBasic(){
        this.navCtrl.push(SearchBasicPage,{
            type:'paper'
        });
    }

    goSearchAdvance(){
        this.navCtrl.push(SearchAdvancePage);
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
