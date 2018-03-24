import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MePage } from './me';
import {ServicesModule} from "../../services/services.module";

@NgModule({
  declarations: [
    MePage,
  ],
  imports: [
    IonicPageModule.forChild(MePage),
    ServicesModule,
  ],
})
export class MePageModule {}
