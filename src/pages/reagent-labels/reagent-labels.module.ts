import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReagentLabelsPage } from './reagent-labels';

@NgModule({
  declarations: [
    ReagentLabelsPage,
  ],
  imports: [
    IonicPageModule.forChild(ReagentLabelsPage),
  ],
  exports: [
    ReagentLabelsPage
  ]
})
export class ReagentLabelsPageModule {}
