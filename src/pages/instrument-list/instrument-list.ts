import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {InstrumentDetailPage} from "../instrument-detail/instrument-detail";
import {GetInstrumentsResult, InstrumentBrief} from "../../classes/instrument";
import {InstrumentService} from "../../services/instrument.service";
import {ToastService} from "../../services/toast.service";

@Component({
  selector: 'page-instrument-list',
  templateUrl: 'instrument-list.html',
})
export class InstrumentListPage {

  instruments:InstrumentBrief[]=[];
  currentPage:number=1;
  totalPageCount:number=0;
  totalInstrumentCount:number=-1;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private instrumentService: InstrumentService,
    private toastSvc: ToastService,
  ) {}

  get pageFrom():('search' | 'label'){
    return this.navParams.get('pageFrom');
  }

  get param():any{
    return this.navParams.get('param');
  }

  ionViewWillLoad(){
    this.getMoreInstruments().catch(() => {
      this.navCtrl.pop().then(() => {
        this.toastSvc.toast('获取试剂列表失败');
      });
    });
  }

  getMoreInstruments():Promise<void>{
    if (this.pageFrom == 'label') {
      return this.instrumentService.getInstrumentsByLabel(this.param['labelId'],this.currentPage).then((result:GetInstrumentsResult)=>{
        this.handleGetInstrumentsResult(result);
      });
    }else if (this.pageFrom == 'search') {
      return this.instrumentService.getInstrumentsBySearch(this.param,this.currentPage).then((result:GetInstrumentsResult)=>{
        this.handleGetInstrumentsResult(result);
      });
    }
  }

  handleGetInstrumentsResult(result:GetInstrumentsResult){
    this.currentPage++;
    this.totalPageCount=result.totalPageCount;
    this.totalInstrumentCount=result.totalItemCount;
    this.instruments.push.apply(this.instruments,result.items);
  }

  goInstrumentDetail(instrumentId){
    this.navCtrl.push(InstrumentDetailPage,{
      'instrumentId':instrumentId
    });
  }

}
