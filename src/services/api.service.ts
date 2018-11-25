import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {CONST} from "../app/const";
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {ToastService} from "./toast.service";
import {Observable} from 'rxjs'
import {ApiError} from '../classes/error'

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient,
    private toastSvc: ToastService,
  ) {}

  private handleHttp(request:Observable<Object>){
    return request.toPromise().catch((error:HttpErrorResponse) => {
      let messageText;
      if (error.status === 401) {
        messageText='请先登录';
      }else if (error.status === 403) {
        messageText='您没有权限进行该操作';
      }else{
        console.error(error);
        messageText='出错了';
      }
      throw new ApiError(messageText);
    }).then(async (res:HttpResponse<object>)=>{
      const data = res.body;
      if (data['status']==='success') {
        return data['payload'];
      }else{
        throw new ApiError(data['payload']);
      }
    }).catch((error) => {
      if(error instanceof ApiError){
        this.toastSvc.toast(error.message);
      }
      throw error;
    });
  }

  async get(
    url:string,
    params:{
      [param: string]: any;
    }=null
  ):Promise<any>{
    let request=this.http.get(CONST.apiUrl+url,{
      params: params,
      observe: 'response',
      withCredentials:true
    });
    return this.handleHttp(request);
  }

  async post(url:string, body:object=null):Promise<any>{
    let request=this.http.post(CONST.apiUrl+url, body,{
      observe: 'response',
      withCredentials:true
    });
    return this.handleHttp(request);
  }


}
