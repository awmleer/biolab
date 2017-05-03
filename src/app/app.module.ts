import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
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
        TabsPage,
        ReagentCardComponent
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp)
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
        TabsPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {}
