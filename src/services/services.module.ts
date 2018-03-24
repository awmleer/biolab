import { NgModule } from '@angular/core';
import {AccountService} from "./account.service";
import {ApiService} from "./api.service";
import {BbsService} from "./bbs.service";
import {PaperService} from "./paper.service";
import {ReagentService} from "./reagent.service";
import {ShareService} from "./share.service";
import {ToastService} from "./toast.service";

@NgModule({
  declarations: [
  ],
  imports: [],
  providers: [
    AccountService,
    ApiService,
    BbsService,
    PaperService,
    ReagentService,
    ShareService,
    ToastService,
  ]
})
export class ServicesModule {}
