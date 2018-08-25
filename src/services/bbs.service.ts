import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {PostBrief, PostDetail} from "../classes/post";
import {Page} from "../classes/page";
import {ImagePicker, ImagePickerOptions} from '@ionic-native/image-picker'

@Injectable()
export class BbsService {

  constructor(
    private apiSvc: ApiService,
    private imagePicker: ImagePicker,
  ) {}

  postList(pageNumber:number, orderBy:string='id'):Promise<Page<PostBrief>>{
    console.log(pageNumber);
    return this.apiSvc.get(`/bbs/post/list/${pageNumber}/`,{
      orderBy: orderBy
    });
  }

  postDetail(postId):Promise<PostDetail>{
    return this.apiSvc.get(`/bbs/post/${postId}/`);
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

  }

}
