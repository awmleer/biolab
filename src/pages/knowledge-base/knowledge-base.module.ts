import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {ServicesModule} from "../../services/services.module";
import {KnowledgeBasePage} from "./knowledge-base";

@NgModule({
  declarations: [
    KnowledgeBasePage,
  ],
  imports: [
    IonicPageModule.forChild(KnowledgeBasePage),
    ServicesModule,
  ],
})
export class KnowledgeBaseModule {}
