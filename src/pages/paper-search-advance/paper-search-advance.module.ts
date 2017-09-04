import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaperSearchAdvancePage } from './paper-search-advance';

@NgModule({
  declarations: [
    PaperSearchAdvancePage,
  ],
  imports: [
    IonicPageModule.forChild(PaperSearchAdvancePage),
  ],
  exports: [
    PaperSearchAdvancePage
  ]
})
export class PaperSearchAdvancePageModule {}
