import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/links/links';
import { ContactPage } from '../pages/contact/contact';
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
import {HttpModule} from "@angular/http";
import {PaperLabelsPage} from "../pages/paper-labels/paper-labels";
import {PaperService} from "../services/paper.service";
import {ToastService} from "../services/toast.service";
import { PaperCardComponent } from '../components/paper-card/paper-card';
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {Clipboard} from "@ionic-native/clipboard";
import {FilterPipe, FuzzyFilterPipe} from "../pipes/filter.pipe";
import {IonicStorageModule} from "@ionic/storage";
import {SocialSharing} from "@ionic-native/social-sharing";
import {ShareService} from "../services/share.service";
import {ApiService} from "../services/api.service";
import {PaperSearchAdvancePageModule} from "../pages/paper-search-advance/paper-search-advance.module";
import {ReagentService} from "../services/reagent.service";
import {PipesModule} from "../pipes/pipes.module";
import {PhotoViewer} from "@ionic-native/photo-viewer";
import {ReagentLabelsPageModule} from "../pages/reagent-labels/reagent-labels.module";
import {BbsListPageModule} from "../pages/bbs-list/bbs-list.module";


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
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
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    PaperSearchAdvancePageModule,
    ReagentLabelsPageModule,
    BbsListPageModule,
    PipesModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
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
    ApiService,
    ToastService,
    PaperService,
    ReagentService,
    ShareService,
    FilterPipe,
    FuzzyFilterPipe,
    InAppBrowser,
    Clipboard,
    SocialSharing,
    PhotoViewer,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
