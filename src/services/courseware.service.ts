import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {BioFile} from '../classes/courseware';
import {CONST} from '../app/const';
import {InAppBrowser} from '@ionic-native/in-app-browser';

@Injectable()
export class CoursewareService {

  constructor(
    private apiSvc: ApiService,
    private inAppBrowser: InAppBrowser,
  ) {}

  ls(folderId: number = null): Promise<{path: BioFile[]; files: BioFile[];}> {
    const data:any = {};
    if (folderId !== null) data.folderId = folderId;
    return this.apiSvc.get(`/courseware/ls/`, data);
  }

  download(file: BioFile) {
    this.inAppBrowser.create(`${CONST.apiUrl}/courseware/${file.id}/download/?token=${file.token}`,'_system');
  }

}
