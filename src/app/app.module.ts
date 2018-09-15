import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ReagentPage} from "../pages/reagent/reagent";
import {SearchBasicPage} from "../pages/search-basic/search-basic";
import {ReagentListPage} from "../pages/reagent-list/reagent-list";
import {ReagentCardComponent} from "../components/reagent-card/reagent-card";
import {ReagentDetailPage} from "../pages/reagent-detail/reagent-detail";
import {PaperListPage} from "../pages/paper-list/paper-list";
import { PaperCardComponent } from '../components/paper-card/paper-card';
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {Clipboard} from "@ionic-native/clipboard";
import {FilterPipe, FuzzyFilterPipe} from "../pipes/filter.pipe";
import {IonicStorageModule} from "@ionic/storage";
import {SocialSharing} from "@ionic-native/social-sharing";
import {PaperSearchAdvancePageModule} from "../pages/paper-search-advance/paper-search-advance.module";
import {PipesModule} from "../pipes/pipes.module";
import {PhotoViewer} from "@ionic-native/photo-viewer";
import {ReagentLabelsPageModule} from "../pages/reagent-labels/reagent-labels.module";
import {BbsListPageModule} from "../pages/bbs-list/bbs-list.module";
import {BbsDetailPageModule} from "../pages/bbs-detail/bbs-detail.module";
import {HttpClientModule} from "@angular/common/http";
import {MePageModule} from "../pages/me/me.module";
import {LoginPageModule} from "../pages/login/login.module";
import {ServicesModule} from "../services/services.module";
import {BbsReplyTextPageModule} from "../pages/bbs-reply-text/bbs-reply-text.module";
import {BbsPostAddPageModule} from "../pages/bbs-post-add/bbs-post-add.module";
import {KnowledgeBasePageModule} from "../pages/knowledge-base/knowledge-base.module";
import {LinksPageModule} from "../pages/links/links.module";
import {PaperPageModule} from "../pages/paper/paper.module";
import {PaperDetailPageModule} from "../pages/paper-detail/paper-detail.module";
import {PaperLabelsPageModule} from "../pages/paper-labels/paper-labels.module";
import {InstrumentPageModule} from '../pages/instrument/instrument.module'
import {InstrumentListPageModule} from '../pages/instrument-list/instrument-list.module'
import {InstrumentDetailPageModule} from '../pages/instrument-detail/instrument-detail.module'
import {InstrumentLabelsPageModule} from '../pages/instrument-labels/instrument-labels.module'
import {ImagePicker} from '@ionic-native/image-picker'
import {NoticeListPageModule} from '../pages/notice-list/notice-list.module'
import {NoticeService} from '../services/notice.service'
import {NoticeDetailPageModule} from '../pages/notice-detail/notice-detail.module'


@NgModule({
  declarations: [
    MyApp,
    ReagentPage,
    SearchBasicPage,
    ReagentListPage,
    ReagentDetailPage,
    PaperListPage,
    TabsPage,
    FilterPipe,
    FuzzyFilterPipe,
    ReagentCardComponent,
    PaperCardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    PaperSearchAdvancePageModule,
    ReagentLabelsPageModule,
    BbsListPageModule,
    BbsDetailPageModule,
    MePageModule,
    LoginPageModule,
    PipesModule,
    ServicesModule,
    BbsReplyTextPageModule,
    BbsPostAddPageModule,
    KnowledgeBasePageModule,
    LinksPageModule,
    PaperPageModule,
    PaperDetailPageModule,
    PaperLabelsPageModule,
    InstrumentPageModule,
    InstrumentListPageModule,
    InstrumentDetailPageModule,
    InstrumentLabelsPageModule,
    NoticeListPageModule,
    NoticeDetailPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ReagentPage,
    SearchBasicPage,
    ReagentListPage,
    ReagentDetailPage,
    PaperListPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FilterPipe,
    FuzzyFilterPipe,
    InAppBrowser,
    Clipboard,
    SocialSharing,
    PhotoViewer,
    ImagePicker,
    NoticeService,
    // {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
