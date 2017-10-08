import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BbsDetailPage } from './bbs-detail';

@NgModule({
  declarations: [
    BbsDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(BbsDetailPage),
  ],
  exports: [
    BbsDetailPage
  ]
})
export class BbsDetailPageModule {}
