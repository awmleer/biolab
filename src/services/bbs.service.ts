import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {PostBrief, PostDetail} from "../classes/post";

@Injectable()
export class BbsService {

  constructor(
    private apiSvc: ApiService,
  ) {}

  postList():Promise<PostBrief[]>{
    return this.apiSvc.get('/bbs/list/');
  }

  postDetail(postId):Promise<PostDetail>{
    return this.apiSvc.get(`/bbs/${postId}/view/`);
  }

}
