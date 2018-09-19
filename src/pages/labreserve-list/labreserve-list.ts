import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LabDetailPage} from "../labreserve-detail/labreserve-detail";
import {Lab} from "../../classes/lab";
import {LabreserveService} from "../../services/labreserve.service";
import {ToastService} from "../../services/toast.service";

@Component({
  selector: 'page-instrument-list',
  templateUrl: 'labreserve-list.html',
})
export class LabListPage {

  labs:Lab[]=[];


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private LabService: LabreserveService,
    private toastSvc: ToastService,
  ) {}

  get pageFrom():('search' | 'label'){
    return this.navParams.get('pageFrom');
  }

  get param():any{
    return this.navParams.get('param');
  }

  ionViewWillLoad(){
    this.LabService.labList().catch(() => {
      this.navCtrl.pop().then(() => {
        this.toastSvc.toast('获取实验室列表失败');
      });
    });
  }

  viewDetail(labId){
    this.navCtrl.push(LabDetailPage,{
      'labId':labId
    });
  }

}
