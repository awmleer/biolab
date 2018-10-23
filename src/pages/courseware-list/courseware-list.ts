import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CoursewareService} from '../../services/courseware.service';
import {BioFile} from '../../classes/courseware';


@IonicPage()
@Component({
  selector: 'page-courseware-list',
  templateUrl: 'courseware-list.html',
})
export class CoursewareListPage {

  path: BioFile[] = null;
  files: BioFile[] = null;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public coursewareSvc: CoursewareService,
  ) {}

  get folderId():any{
    return this.navParams.get('folderId');
  }

  get folderName():any{
    return this.navParams.get('folderName');
  }

  async ionViewDidLoad() {
    const data = await this.coursewareSvc.ls(this.folderId);
    this.files = data.files;
    this.path = data.path;
  }

  openFolder(file: BioFile) {
    this.navCtrl.push(CoursewareListPage, {
      folderName: file.name,
      folderId: file.id
    });
  }

}
