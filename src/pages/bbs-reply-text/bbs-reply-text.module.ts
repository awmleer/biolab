import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BbsReplyTextPage } from './bbs-reply-text';
import {ServicesModule} from "../../services/services.module";

@NgModule({
  declarations: [
    BbsReplyTextPage,
  ],
  imports: [
    IonicPageModule.forChild(BbsReplyTextPage),
    ServicesModule,
  ],
})
export class BbsReplyTextPageModule {}
