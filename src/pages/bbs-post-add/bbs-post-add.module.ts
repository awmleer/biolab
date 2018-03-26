import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BbsPostAddPage } from './bbs-post-add';
import {ServicesModule} from "../../services/services.module";

@NgModule({
  declarations: [
    BbsPostAddPage,
  ],
  imports: [
    IonicPageModule.forChild(BbsPostAddPage),
    ServicesModule,
  ],
})
export class BbsPostAddPageModule {}
