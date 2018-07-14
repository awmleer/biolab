import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InstrumentDetailPage } from './instrument-detail';
import {PipesModule} from '../../pipes/pipes.module'

@NgModule({
  declarations: [
    InstrumentDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(InstrumentDetailPage),
    PipesModule,
  ],
})
export class InstrumentDetailPageModule {}
