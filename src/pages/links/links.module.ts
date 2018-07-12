import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {ServicesModule} from "../../services/services.module";
import {LinksPage} from "./links";

@NgModule({
  declarations: [
    LinksPage,
  ],
  imports: [
    IonicPageModule.forChild(LinksPage),
    ServicesModule,
  ],
  exports: [
    LinksPage
  ]
})
export class LinksPageModule {}
