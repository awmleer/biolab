import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {ServicesModule} from "../../services/services.module";
import {PaperLabelsPage} from "./paper-labels";

@NgModule({
  declarations: [
    PaperLabelsPage,
  ],
  imports: [
    IonicPageModule.forChild(PaperLabelsPage),
    ServicesModule,
  ],
  exports: [
    PaperLabelsPage
  ]
})
export class PaperLabelsPageModule {}
