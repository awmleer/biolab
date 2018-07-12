import {Injectable} from "@angular/core";

import 'rxjs/add/operator/toPromise'
import {ToastService} from "./toast.service";
import {GetInstrumentsResult, InstrumentBrief} from "../classes/instrument";
import {ApiService} from "./api.service";
import {InstrumentSearchParam} from "../classes/search-param";


@Injectable()
export class InstrumentService {

  constructor(
    private toastService: ToastService,
    private apiSvc: ApiService,
  ) {}

  getInstrumentsByLabel(labelId,page:number):Promise<GetInstrumentsResult>{
    return this.apiSvc.get(`/instrument/label/${labelId}/instruments/${page}/`).then(data=>{
      return data;
    });
  }

  getInstrumentsBySearchBasic(searchText:string,searchField:string,page:number):Promise<GetInstrumentsResult>{
    return this.apiSvc.post(`/instrument/search/basic/${page}/`,{
      searchText: searchText,
      field: searchField
    }).then(data=>{
      return data;
    });
  }

  getInstrumentsBySearch(searchParam:InstrumentSearchParam,page:number):Promise<GetInstrumentsResult>{
    return this.apiSvc.post(`/instrument/search/${page}/`,searchParam).then(data=>{
      return data;
    });
  }

  getInstrumentDetail(instrumentId){
    return this.apiSvc.get(`/instrument/${instrumentId}/detail/`);
  }

  getLabelList():Promise<any>{
    return this.apiSvc.get(`/instrument/label/list/`).then(data=>{
      return data;
    });
  }

}
