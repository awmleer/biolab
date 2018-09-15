import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {NoticeBrief, NoticeDetail} from "../classes/notice";
import {Page} from "../classes/page";

@Injectable()
export class NoticeService {

  constructor(
    private apiSvc: ApiService,
  ) {}

  noticeList(pageNumber:number):Promise<Page<NoticeBrief>>{
    console.log(pageNumber);
    return this.apiSvc.get(`/notice/list/${pageNumber}/`);
  }

  noticeDetail(noticeId):Promise<NoticeDetail>{
    return this.apiSvc.get(`/notice/${noticeId}/`);
  }
}
