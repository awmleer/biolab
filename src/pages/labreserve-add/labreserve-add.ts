import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {LabreserveService} from "../../services/labreserve.service";
import {PostDetail} from "../../classes/post";
import {BbsReplyTextPage} from "../bbs-reply-text/bbs-reply-text";
import {Reservation} from "../../classes/reservation";


@IonicPage()
@Component({
  selector: 'page-labreserve-detail',
  templateUrl: 'labreserve-add.html',
})
export class LabAddPage {

  reservationsAll:Reservation[];
  reservationsPersonal:Reservation[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private labSvc: LabreserveService,
    private modalCtrl: ModalController,

  ) {}

  get labId():number{
    return this.navParams.get('labId');
  }

  ionViewWillLoad() {
    this.fetchPersonalReservations();
    this.fetchAllReservations();
  }

  fetchPersonalReservations(){
    this.labSvc.personalReservationListByLabID(this.labId).then((r) => {
      this.reservationsAll=r;
    });
  }

  fetchAllReservations(){
    this.labSvc.allReservationListByLabID(this.labId).then((r) => {
      this.reservationsPersonal=r;
    });
  }

  addMyReservation() {
    this.navCtrl.push(LabAddPage, {
      labId: this.labId,
    });
  }


}
