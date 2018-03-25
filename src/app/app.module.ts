import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/links/links';
import { KnowledgeBasePage } from '../pages/knowledge-base/knowledge-base';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ReagentPage} from "../pages/reagent/reagent";
import {SearchBasicPage} from "../pages/search-basic/search-basic";
import {ReagentListPage} from "../pages/reagent-list/reagent-list";
import {ReagentCardComponent} from "../components/reagent-card/reagent-card";
import {ReagentDetailPage} from "../pages/reagent-detail/reagent-detail";
import {PaperPage} from "../pages/paper/paper";
import {PaperListPage} from "../pages/paper-list/paper-list";
import {PaperDetailPage} from "../pages/paper-detail/paper-detail";
import {PaperLabelsPage} from "../pages/paper-labels/paper-labels";
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


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    KnowledgeBasePage,
    ReagentPage,
    SearchBasicPage,
    ReagentListPage,
    ReagentDetailPage,
    PaperPage,
    PaperListPage,
    PaperLabelsPage,
    PaperDetailPage,
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
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    KnowledgeBasePage,
    ReagentPage,
    SearchBasicPage,
    ReagentListPage,
    ReagentDetailPage,
    PaperPage,
    PaperListPage,
    PaperLabelsPage,
    PaperDetailPage,
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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
