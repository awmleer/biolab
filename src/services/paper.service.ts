import {Injectable} from "@angular/core";

import 'rxjs/add/operator/toPromise'
import {Http} from "@angular/http";
import {CONST} from "../app/const";
import {PaperLabel} from "../classes/paper-label";
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
        return this.apiSvc.get(`${CONST.apiUrl}/paper/${paperId}/detail/`);
    }

    getLabelList():Promise<any>{
        return this.apiSvc.get(`${CONST.apiUrl}/paper/label/list/`).then(data=>{
            return data;
        });
    }

}
