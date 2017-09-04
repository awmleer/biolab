import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PaperListPage} from "../paper-list/paper-list";

@Component({
  selector: 'page-paper-search-advance',
  templateUrl: 'paper-search-advance.html',
})
export class PaperSearchAdvancePage {

  searchParam={
    all:'',
    subject:'',
    title:'',
    keyword:'',
    teacher:'',
    content:'',
    publishYear:'',
    major:''
  };

  constructor(
    public navCtrl: NavController,
  ) {}

  doSearch(){
    let param=[];
    for (let key in this.searchParam) {
      if (this.searchParam[key]!='') {
        param.push({
          field:key,
          value:this.searchParam[key]
        });
      }
    }
    this.navCtrl.push(PaperListPage,{
      'pageFrom': 'search',
      'param':param
    });
  }


}
