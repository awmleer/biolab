import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InstrumentListPage } from './instrument-list';
import {InstrumentCardComponent} from '../../components/instrument-card/instrument-card'
import {PipesModule} from '../../pipes/pipes.module'

@NgModule({
  declarations: [
    InstrumentListPage,
    InstrumentCardComponent,
  ],
  imports: [
    IonicPageModule.forChild(InstrumentListPage),
    PipesModule,
  ],
})
export class InstrumentListPageModule {}
