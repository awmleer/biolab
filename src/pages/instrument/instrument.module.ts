import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InstrumentPage } from './instrument';

@NgModule({
  declarations: [
    InstrumentPage,
  ],
  imports: [
    IonicPageModule.forChild(InstrumentPage),
  ],
})
export class InstrumentPageModule {}
