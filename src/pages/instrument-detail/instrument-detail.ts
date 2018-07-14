import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {InstrumentDetail} from "../../classes/instrument";
import {InstrumentService} from "../../services/instrument.service";
import {ToastService} from "../../services/toast.service";
import {PhotoViewer} from "@ionic-native/photo-viewer";

@Component({
  selector: 'page-instrument-detail',
  templateUrl: 'instrument-detail.html',
})
export class InstrumentDetailPage {

  instrument:InstrumentDetail;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private instrumentService: InstrumentService,
    private toastService: ToastService,
    private photoViewer: PhotoViewer,
  ) {}

  ionViewWillLoad(){
    this.instrumentService.getInstrumentDetail(this.navParams.get('instrumentId')).then(data=>{
      this.instrument=data;
    }).catch(() => {
      this.toastService.toast('获取仪器信息失败');
      this.navCtrl.pop();
    });
  }

  viewPicture(url,title){
    this.photoViewer.show(url,title);
  }


}
