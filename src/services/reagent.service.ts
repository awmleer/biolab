import {Injectable} from "@angular/core";

import 'rxjs/add/operator/toPromise'
import {ToastService} from "./toast.service";
import {GetReagentsResult, ReagentBrief} from "../classes/reagent";
import {ApiService} from "./api.service";
import {ReagentSearchParam} from "../classes/search-param";


@Injectable()
export class ReagentService {

  constructor(
    private toastService: ToastService,
    private apiSvc: ApiService,
  ) {}

  getReagentsByLabel(labelId,page:number):Promise<GetReagentsResult>{
    return this.apiSvc.get(`/reagent/label/${labelId}/reagents/${page}/`).then(data=>{
      return data;
    });
  }

  getReagentsBySearchBasic(searchText:string,searchField:string,page:number):Promise<GetReagentsResult>{
    return this.apiSvc.post(`/reagent/search/basic/${page}/`,{
      searchText: searchText,
      field: searchField
    }).then(data=>{
      return data;
    });
  }

  getReagentsBySearch(searchParam:ReagentSearchParam,page:number):Promise<GetReagentsResult>{
    return this.apiSvc.post(`/reagent/search/${page}/`,searchParam).then(data=>{
      return data;
    });
  }

  getReagentDetail(reagentId){
    return this.apiSvc.get(`/reagent/${reagentId}/detail/`);
  }

  getLabelList():Promise<any>{
    return this.apiSvc.get(`/reagent/label/list/`).then(data=>{
      return data;
    });
  }

}
