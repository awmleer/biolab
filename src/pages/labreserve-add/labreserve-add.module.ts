import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LabAddPage } from './labreserve-add';
import {PipesModule} from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    LabAddPage,
  ],
  imports: [
    IonicPageModule.forChild(LabAddPage),
    PipesModule,
  ],
  exports: [
    LabAddPage
  ]
})
export class LabAddPageModule {}
