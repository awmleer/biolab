import { Component } from '@angular/core';

import { AboutPage } from '../links/links';
import { ContactPage } from '../contact/contact';
import { KnowledgeBasePage } from '../knowledge-base/knowledge-base';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = KnowledgeBasePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
