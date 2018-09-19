import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LabAddPage } from './labreserve-add';

@NgModule({
  declarations: [
    LabAddPage,
  ],
  imports: [
    IonicPageModule.forChild(LabAddPage),
  ],
  exports: [
    LabAddPage
  ]
})
export class BbsDetailPageModule {}
