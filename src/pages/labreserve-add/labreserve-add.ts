import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {LabreserveService} from "../../services/labreserve.service";
import {Reservation} from "../../classes/reservation";
import {Lab} from "../../classes/lab";
import {MyReservationsListPage} from "../labreserve-myreservations-list/labreserve-myreservations-list";


@IonicPage()
@Component({
  selector: 'page-labreserve-add',
  templateUrl: 'labreserve-add.html',
})
export class LabAddPage {

  reservationsAll:Reservation[];
  reservationsPersonal:Reservation[];
  lab: Lab;
  newReservation: Reservation;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private labSvc: LabreserveService,

  ) {
    this.newReservation = new Reservation();
    this.newReservation.startTime = new Date().toLocaleString();
    this.newReservation.endTime = new Date().toLocaleString();
  }

  get labId():number{
    return this.navParams.get('labId');
  }

  async ionViewWillLoad() {
    this.lab = await this.labSvc.getLab(this.labId);
  }

  async submitReservation() {
    console.log(this.newReservation.description);
    await this.labSvc.addReservation(this.newReservation.startTime, this.newReservation.endTime, this.lab.id, this.newReservation.description);
    this.navCtrl.pop();
    this.navCtrl.push(MyReservationsListPage, {
      'labId':this.labId,
    });
  }
}
