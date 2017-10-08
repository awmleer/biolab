import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BbsListPage } from './bbs-list';

@NgModule({
  declarations: [
    BbsListPage,
  ],
  imports: [
    IonicPageModule.forChild(BbsListPage),
  ],
  exports: [
    BbsListPage
  ]
})
export class BbsListPageModule {}
