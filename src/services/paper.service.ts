import {Injectable} from "@angular/core";

import 'rxjs/add/operator/toPromise'
import {Http} from "@angular/http";
import {CONST} from "../app/const";
import {PaperLabel} from "../classes/paper-label";
import {ToastService} from "./toast.service";
import {GetPapersResult, PaperBrief} from "../classes/paper";


@Injectable()
export class PaperService {

    constructor(
        private http: Http,
        private toastService: ToastService
    ) {}

    getPapersByLabel(labelId,page:number):Promise<GetPapersResult>{
        return this.http.get(`${CONST.apiUrl}/paper/label/${labelId}/papers/${page}/`).toPromise().then(response=>{
            return response.json();
        },err=>{
            this.toastService.toast('获取论文列表失败');
        });
    }

    getPapersBySearchBasic(searchText:string,searchField:string,page:number):Promise<GetPapersResult>{
        return this.http.post(`${CONST.apiUrl}/paper/search/basic/${page}/`,{
            searchText: searchText,
            field: searchField
        }).toPromise().then(response=>{
            return response.json();
        },err=>{
            this.toastService.toast('获取论文列表失败');
        });
    }

    getPaperDetail(paperId){
        return this.http.get(`${CONST.apiUrl}/paper/${paperId}/detail/`).toPromise();
    }

    getLabelList():Promise<any>{
        return this.http.get(`${CONST.apiUrl}/paper/label/list/`).toPromise().then(response=>{
            return response.json();
        });
    }

}
