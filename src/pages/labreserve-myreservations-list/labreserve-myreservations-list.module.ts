import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyReservationsListPage } from './labreserve-myreservations-list';
import {PipesModule} from '../../pipes/pipes.module'

@NgModule({
  declarations: [
    MyReservationsListPage,
  ],
  imports: [
    IonicPageModule.forChild(MyReservationsListPage),
    PipesModule,
  ],
})
export class MyReservationsListPageModule {}
