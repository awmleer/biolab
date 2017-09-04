import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {CONST} from "../app/const";
import {ToastService} from "./toast.service";

@Injectable()
export class ApiService {

  constructor(
    private http: Http,
    private toastSvc: ToastService,
  ) {}

  get(url:string, params:object={}):Promise<any>{
    console.log(CONST.apiUrl + url);
    return this.http.get(CONST.apiUrl+url,{
      params:params
    }).toPromise().then((response:Response)=>{
      let data = response.json();
      if (data['status']=='success') {
        return data['payload'];
      }else{
          this.toastSvc.toast(data['payload']);
          throw new Error(data['payload']);
      }
    });
  }

  post(url:string, body:object={}):Promise<any>{
    return this.http.post(CONST.apiUrl+url, body).toPromise().then((response:Response)=>{
      let data = response.json();
      if (data['status']=='success') {
        return data['payload'];
      }else{
        throw new Error(data['payload']);
      }
    });
  }


}
