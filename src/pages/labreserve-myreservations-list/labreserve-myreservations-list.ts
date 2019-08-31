import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Lab} from "../../classes/lab";
import {LabreserveService} from "../../services/labreserve.service";
import {ToastService} from "../../services/toast.service";
import {Reservation} from "../../classes/reservation";
import {AlertController} from "ionic-angular";

@Component({
  selector: 'page-labreserve-list',
  templateUrl: 'labreserve-myreservations-list.html',
})
export class MyReservationsListPage {

  lab:Lab;
  Reservations: Reservation[];
  private msg: string;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private labSvc: LabreserveService,
    private toastSvc: ToastService,
    private alertCtrl: AlertController,
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

  confirmDeletion(reservation:Reservation) {
    if(reservation.status == 'init') {
      this.msg = '您的申请目前处于未审批状态，删除之后将不可恢复，确认进行此操作吗？';
    } else if (reservation.status == 'approved') {
      this.msg = '您的申请目前已被审批为同意状态，删除之后将不可恢复，并且如果再次申请需要重新审批，确认进行此操作吗？';
    } else if (reservation.status == 'rejected') {
      this.msg = '您的申请目前被审批为拒绝状态，删除之后将不可恢复，若您只是想重新申请，可不必删除本申请，确认进行此操作吗？';
    }
    const confirm = this.alertCtrl.create({
      title: '您确定要删除本申请吗？',
      message: this.msg,
      buttons: [
        {
          text: '取消',
          handler: () => {
            console.log('用户取消');
          }
        },
        {
          text: '确认',
          handler: () => {
            console.log('用户确认');
            this.doDeletion(reservation.id);
            this.getReservationList();
          }
        }
      ]
    });
    confirm.present();
  }

  async doDeletion(reservationID: number) {
    await this.labSvc.removeReservation(reservationID);
  }

}
