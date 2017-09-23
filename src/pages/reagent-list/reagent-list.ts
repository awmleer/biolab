import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ReagentDetailPage} from "../reagent-detail/reagent-detail";
import {GetReagentsResult, ReagentBrief} from "../../classes/reagent";
import {ReagentService} from "../../services/reagent.service";
import {ToastService} from "../../services/toast.service";

@Component({
  selector: 'page-reagent-list',
  templateUrl: 'reagent-list.html',
})
export class ReagentListPage {

  reagents:ReagentBrief[]=[];
  currentPage:number=1;
  totalPageCount:number=0;
  totalReagentCount:number=-1;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private reagentService: ReagentService,
    private toastSvc: ToastService,
  ) {}

  get pageFrom():('search' | 'label'){
    return this.navParams.get('pageFrom');
  }

  get param():any{
    return this.navParams.get('param');
  }

  ionViewWillLoad(){
    this.getMoreReagents().catch(() => {
      this.navCtrl.pop().then(() => {
        this.toastSvc.toast('获取试剂列表失败');
      });
    });
  }

  getMoreReagents():Promise<null>{
    if (this.pageFrom == 'label') {
      return this.reagentService.getReagentsByLabel(this.param['labelId'],this.currentPage).then((result:GetReagentsResult)=>{
        this.handleGetReagentsResult(result);
      });
    }else if (this.pageFrom == 'search') {
      return this.reagentService.getReagentsBySearch(this.param,this.currentPage).then((result:GetReagentsResult)=>{
        this.handleGetReagentsResult(result);
      });
    }
  }

  handleGetReagentsResult(result:GetReagentsResult){
    this.currentPage++;
    this.totalPageCount=result.totalPageCount;
    this.totalReagentCount=result.totalReagentCount;
    this.reagents.push.apply(this.reagents,result.reagents);
  }

  goReagentDetail(){
    this.navCtrl.push(ReagentDetailPage);
  }

}
