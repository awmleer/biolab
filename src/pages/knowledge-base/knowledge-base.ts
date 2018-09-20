import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ReagentPage} from "../reagent/reagent";
import {PaperPage} from "../paper/paper";
import {BbsListPage} from "../bbs-list/bbs-list";
import {InstrumentPage} from '../instrument/instrument'
import {BbsService} from '../../services/bbs.service'
import {NoticeListPage} from '../notice-list/notice-list'
import {LabListPage} from '../labreserve-list/labreserve-list'

@Component({
  selector: 'page-knowledge-base',
  templateUrl: 'knowledge-base.html'
})
export class KnowledgeBasePage {

  constructor(
    public navCtrl: NavController,
    public bbsSvc: BbsService,
  ) {}

  goReagentPage(){
    this.navCtrl.push(ReagentPage);
  }

  goPaperPage(){
    this.navCtrl.push(PaperPage);
  }

  goBBS(){
    this.navCtrl.push(BbsListPage);
  }

  goInstrumentPage(){
    this.navCtrl.push(InstrumentPage);
  }

  goNoticeListPage() {
    this.navCtrl.push(NoticeListPage);
  }

  goLabReservePage() {
    this.navCtrl.push(LabListPage);
  }

  testImagePicker() {
    this.bbsSvc.replyImage(1);
  }

}
