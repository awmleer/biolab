import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ReagentPage} from "../reagent/reagent";

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

}
