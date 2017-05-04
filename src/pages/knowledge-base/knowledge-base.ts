import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ReagentPage} from "../reagent/reagent";
import {ReagentListPage} from "../reagent-list/reagent-list";
import {PaperPage} from "../paper/paper";

@Component({
    selector: 'page-knowledge-base',
    templateUrl: 'knowledge-base.html'
})
export class KnowledgeBasePage {

    constructor(public navCtrl: NavController) {

    }

    goReagentPage(){
        this.navCtrl.push(ReagentPage);
    }

    goPaperPage(){
        this.navCtrl.push(PaperPage);
    }

    goReagentListPage(){
        this.navCtrl.push(ReagentListPage);
    }

}
