import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InstrumentDetailPage } from './instrument-detail';

@NgModule({
  declarations: [
    InstrumentDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(InstrumentDetailPage),
  ],
})
export class InstrumentDetailPageModule {}
