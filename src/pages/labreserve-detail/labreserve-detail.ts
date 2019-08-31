import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {LabreserveService} from "../../services/labreserve.service";
import {Reservation} from "../../classes/reservation";
import {LabAddPage} from "../labreserve-add/labreserve-add";
import {Lab} from "../../classes/lab";
import {MyReservationsListPage} from "../labreserve-myreservations-list/labreserve-myreservations-list";


@IonicPage()
@Component({
  selector: 'page-labreserve-detail',
  templateUrl: 'labreserve-detail.html',
})
export class LabDetailPage {

  reservationsAll:Reservation[];
  reservationsPersonal:Reservation[];
  lab: Lab;
  curDate: Date;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private labSvc: LabreserveService,


  ) {}

  get labId():number{
    return this.navParams.get('labId');
  }

  async ionViewWillLoad() {
    this.fetchAllReservations(new Date());
    this.lab = await this.labSvc.getLab(this.labId);
  }

  fetchAllReservations(d:Date){
    this.labSvc.allReservationListByLabID(d, this.labId).then((r) => {
      this.reservationsAll=r;
    });
  }

  addMyReservation() {
    this.navCtrl.push(LabAddPage, {
      labId: this.labId,
    });
  }

  viewMyReservations() {
    this.navCtrl.push(MyReservationsListPage, {
      labId: this.labId,
    });
  }

  flushDate(){
    this.fetchAllReservations(this.curDate);
  }


}
