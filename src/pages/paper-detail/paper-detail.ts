import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {PaperDetailed} from "../../classes/paper";
import {PaperService} from "../../services/paper.service";
import {ToastService} from "../../services/toast.service";

@Component({
    selector: 'page-paper-detail',
    templateUrl: 'paper-detail.html',
})
export class PaperDetailPage {
    paper:PaperDetailed;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private toastService: ToastService,
        private paperService: PaperService
    ) {}

    ionViewWillLoad(){
        this.paperService.getPaperDetail(this.navParams.get('paperId')).then(response=>{
            this.paper=response.json();
        },err=>{
            this.toastService.toast('获取论文信息失败');
            this.navCtrl.pop();
        });
    }

}
