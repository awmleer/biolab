import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {CONST} from "../app/const";
import {HttpClient} from "@angular/common/http";
import {ToastService} from "./toast.service";

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient,
    private toastSvc: ToastService,
  ) {}

  get(
    url:string, params:{
      [param: string]: any;
    }=null,
    messageOnError:boolean=true):Promise<any>{
    console.log(CONST.apiUrl + url);
    return this.http.get(CONST.apiUrl+url,{
      params:params
    }).toPromise().then((data)=>{
      if (data['status']=='success') {
        return data['payload'];
      }else{
        if(messageOnError){
          if(data['payload']=='NEED_LOGIN'){
            this.toastSvc.toast('请先登录');
          }else{
            this.toastSvc.toast(data['payload']);
          }
        }
        throw new Error(data['payload']);
      }
    });
  }

  post(url:string, body:object={}, messageOnError:boolean=true):Promise<any>{
    return this.http.post(CONST.apiUrl+url, body).toPromise().then((data)=>{
      if (data['status']=='success') {
        return data['payload'];
      }else{
        throw new Error(data['payload']);
      }
    });
  }


}
