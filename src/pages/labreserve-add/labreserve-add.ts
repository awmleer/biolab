import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {LabreserveService} from "../../services/labreserve.service";
import {Reservation} from "../../classes/reservation";
import {Lab} from "../../classes/lab";


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
    private modalCtrl: ModalController,
  ) {
    this.newReservation = new Reservation();
    this.newReservation.startTime = new Date();
    this.newReservation.endTime = new Date();
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
  }
}
