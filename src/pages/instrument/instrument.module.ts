import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InstrumentPage } from './instrument';
import {ServicesModule} from '../../services/services.module'

@NgModule({
  declarations: [
    InstrumentPage,
  ],
  imports: [
    IonicPageModule.forChild(InstrumentPage),
    ServicesModule,
  ],
  exports: [
    InstrumentPage,
  ]
})
export class InstrumentPageModule {}
