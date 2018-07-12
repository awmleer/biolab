import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {InAppBrowser} from "@ionic-native/in-app-browser";

@Component({
  selector: 'page-links',
  templateUrl: './links.html'
})
export class LinksPage {

  constructor(
      public navCtrl: NavController,
      private inAppBrowser: InAppBrowser
  ) {}

  openLink(link:string){
      this.inAppBrowser.create(link,'_system',{
          zoom:'no'
      });
  }

}
