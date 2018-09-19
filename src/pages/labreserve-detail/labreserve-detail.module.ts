import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LabDetailPage } from './labreserve-detail';

@NgModule({
  declarations: [
    LabDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(LabDetailPage),
  ],
  exports: [
    LabDetailPage
  ]
})
export class BbsDetailPageModule {}
