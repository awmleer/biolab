import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InstrumentListPage } from './instrument-list';

@NgModule({
  declarations: [
    InstrumentListPage,
  ],
  imports: [
    IonicPageModule.forChild(InstrumentListPage),
  ],
})
export class InstrumentListPageModule {}
