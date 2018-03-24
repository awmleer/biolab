import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {CONST} from "../app/const";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient,
  ) {}

  //TODO 添加message on error参数
  get(url:string, params:{
    [param: string]: any;
  }=null):Promise<any>{
    console.log(CONST.apiUrl + url);
    return this.http.get(CONST.apiUrl+url,{
      params:params
    }).toPromise().then((data)=>{
      if (data['status']=='success') {
        return data['payload'];
      }else{
          throw new Error(data['payload']);
      }
    });
  }

  post(url:string, body:object={}):Promise<any>{
    return this.http.post(CONST.apiUrl+url, body).toPromise().then((data)=>{
      if (data['status']=='success') {
        return data['payload'];
      }else{
        throw new Error(data['payload']);
      }
    });
  }


}
