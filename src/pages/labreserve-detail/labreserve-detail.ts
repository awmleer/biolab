import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {LabreserveService} from "../../services/labreserve.service";
import {Reservation} from "../../classes/reservation";
import {LabAddPage} from "../labreserve-add/labreserve-add";
import {Lab} from "../../classes/lab";


@IonicPage()
@Component({
  selector: 'page-labreserve-detail',
  templateUrl: 'labreserve-detail.html',
})
export class LabDetailPage {

  reservationsAll:Reservation[];
  reservationsPersonal:Reservation[];
  lab: Lab;

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
    this.lab = this.labSvc.getLab(this.labId);
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
