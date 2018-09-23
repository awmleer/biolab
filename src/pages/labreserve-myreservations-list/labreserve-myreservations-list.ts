import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Lab} from "../../classes/lab";
import {LabreserveService} from "../../services/labreserve.service";
import {ToastService} from "../../services/toast.service";
import {Reservation} from "../../classes/reservation";
import {LabAddPage} from "../labreserve-add/labreserve-add";

@Component({
  selector: 'page-labreserve-list',
  templateUrl: 'labreserve-myreservations-list.html',
})
export class MyReservationsListPage {

  lab:Lab;
  Reservations: Reservation[];


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private labSvc: LabreserveService,
    private toastSvc: ToastService,
  ) {}

  get param():any{
    return this.navParams.get('param');
  }

  get labId():number{
    return this.navParams.get('labId');
  }

  ionViewWillLoad(){
    this.getReservationList().catch(() => {
      this.navCtrl.pop().then(() => {
        this.toastSvc.toast('获取个人预约列表失败');
      });
    });
  }

  async getReservationList() {
    this.lab = await this.labSvc.getLab(this.labId);
    this.Reservations = await this.labSvc.personalReservationListByLabID(this.labId);
  }

  editReservation(reservationId:number) {
    // this.navCtrl.push(LabAddPage, {
    //   reservationId: reservationId,
    // });
    return;
  }

}
