import { Component } from '@angular/core';

import { AboutPage } from '../links/links';
import { KnowledgeBasePage } from '../knowledge-base/knowledge-base';
import {MePage} from "../me/me";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = KnowledgeBasePage;
  tab2Root = AboutPage;
  tab3Root = MePage;

  constructor() {

  }
}
