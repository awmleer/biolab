import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LabListPage } from './labreserve-list';
import {PipesModule} from '../../pipes/pipes.module'

@NgModule({
  declarations: [
    LabListPage,
  ],
  imports: [
    IonicPageModule.forChild(LabListPage),
    PipesModule,
  ],
})
export class LabListPageModule {}
