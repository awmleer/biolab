import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InstrumentLabelsPage } from './instrument-labels';

@NgModule({
  declarations: [
    InstrumentLabelsPage,
  ],
  imports: [
    IonicPageModule.forChild(InstrumentLabelsPage),
  ],
})
export class InstrumentLabelsPageModule {}
