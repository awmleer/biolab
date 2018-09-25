import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {BioFile} from '../classes/courseware';
import {CONST} from '../app/const';

@Injectable()
export class CoursewareService {

  constructor(
    private apiSvc: ApiService,
  ) {}

  ls(folderId: number = null): Promise<{path: BioFile[]; files: BioFile[];}> {
    const data:any = {};
    if (folderId !== null) data.folderId = folderId;
    return this.apiSvc.get(`/courseware/ls/`, data);
  }

  getDownloadLink(file: BioFile) {
    return `${CONST.apiUrl}/courseware/${file.id}/download/`;
  }

}
