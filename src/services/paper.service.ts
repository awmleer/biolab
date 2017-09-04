import {Injectable} from "@angular/core";

import 'rxjs/add/operator/toPromise'
import {ToastService} from "./toast.service";
import {GetPapersResult, PaperBrief} from "../classes/paper";
import {ApiService} from "./api.service";


@Injectable()
export class PaperService {

  constructor(
    private toastService: ToastService,
    private apiSvc: ApiService,
  ) {}

  getPapersByLabel(labelId,page:number):Promise<GetPapersResult>{
    return this.apiSvc.get(`/paper/label/${labelId}/papers/${page}/`).then(data=>{
      return data;
    });
  }

  getPapersBySearchBasic(searchText:string,searchField:string,page:number):Promise<GetPapersResult>{
    return this.apiSvc.post(`/paper/search/basic/${page}/`,{
      searchText: searchText,
      field: searchField
    }).then(data=>{
      return data;
    });
  }

  getPaperDetail(paperId){
    return this.apiSvc.get(`/paper/${paperId}/detail/`);
  }

  getLabelList():Promise<any>{
    return this.apiSvc.get(`/paper/label/list/`).then(data=>{
      return data;
    });
  }

}
