import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {PaperDetail} from "../../classes/paper";
import {PaperService} from "../../services/paper.service";
import {ToastService} from "../../services/toast.service";
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {Clipboard} from "@ionic-native/clipboard";
import {ShareService} from "../../services/share.service";


@Component({
  selector: 'page-paper-detail',
  templateUrl: 'paper-detail.html',
})
export class PaperDetailPage {
  paper:PaperDetail;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toastService: ToastService,
    private paperService: PaperService,
    private shareSvc: ShareService,
    private clipboard: Clipboard
  ) {}

  ionViewWillLoad(){
    this.paperService.getPaperDetail(this.navParams.get('paperId')).then(data=>{
      this.paper=data;
    }).catch(() => {
      this.toastService.toast('获取论文信息失败');
      this.navCtrl.pop();
    });
  }

  share(){
    this.shareSvc.sharePaper(this.paper.id,this.paper.title);
    // this.clipboard.copy(`${this.paper.title} 点击链接阅读：http://118.89.186.130/paper/${this.paper.id}/preview/`);
    // this.toastService.toast('分享链接已复制到剪贴板');
  }

  download(){
    this.paperService.download(this.paper);
  }

  read(){
    this.paperService.read(this.paper);
  }

}
