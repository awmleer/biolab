import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {PostBrief, PostDetail} from "../classes/post";
import {Page} from "../classes/page";
import {ImagePicker, ImagePickerOptions} from '@ionic-native/image-picker'
import {PostGroup} from '../classes/bbs'

@Injectable()
export class BbsService {

  constructor(
    private apiSvc: ApiService,
    private imagePicker: ImagePicker,
  ) {}

  postList(pageNumber:number, orderBy:string='id'):Promise<Page<PostBrief>>{
    return this.apiSvc.get(`/bbs/post/list/${pageNumber}/`,{
      orderBy: orderBy
    });
  }

  postDetail(postId):Promise<PostDetail>{
    return this.apiSvc.get(`/bbs/post/${postId}/`);
  }

  addPost(title, content, groupId, labels): Promise<number> {
    return this.apiSvc.post(`/bbs/post/add/`, {
      title,
      content,
      groupId,
      labels
    });
  }

  getGroups(): Promise<PostGroup[]> {
    return this.apiSvc.get('/bbs/group/all/');
  }

  replyText(postId:number, content:string){
    return this.apiSvc.post(`/bbs/post/${postId}/reply-text/`,{
      content:content
    });
  }

  async replyImage(postId:number) {
    let options: ImagePickerOptions = {
      maximumImagesCount: 1,
      outputType: 1,
    };
    let results = await this.imagePicker.getPictures(options);
    console.log(results);
    if (results.length == 0) return;
    const image = results[0];
    return await this.apiSvc.post(`/bbs/post/${postId}/reply-picture/`, image);
  }

}
