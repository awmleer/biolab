import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {ServicesModule} from "../../services/services.module";
import {PaperDetailPage} from "./paper-detail";

@NgModule({
  declarations: [
    PaperDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PaperDetailPage),
    ServicesModule,
  ],
  exports: [
    PaperDetailPage
  ]
})
export class PaperDetailPageModule {}
