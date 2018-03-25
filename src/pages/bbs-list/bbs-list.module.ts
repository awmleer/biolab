import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BbsListPage } from './bbs-list';
import {ServicesModule} from "../../services/services.module";

@NgModule({
  declarations: [
    BbsListPage,
  ],
  imports: [
    IonicPageModule.forChild(BbsListPage),
    ServicesModule,
  ],
  exports: [
    BbsListPage
  ]
})
export class BbsListPageModule {}
