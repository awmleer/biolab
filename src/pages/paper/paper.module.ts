import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {ServicesModule} from "../../services/services.module";
import {PaperPage} from "./paper";

@NgModule({
  declarations: [
    PaperPage,
  ],
  imports: [
    IonicPageModule.forChild(PaperPage),
    ServicesModule,
  ],
  exports: [
    PaperPage
  ]
})
export class PaperPageModule {}
