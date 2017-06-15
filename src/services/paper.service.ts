import {Injectable} from "@angular/core";

import 'rxjs/add/operator/toPromise'
import {Http} from "@angular/http";
import {CONFIG} from "../app/config";
import {PaperLabel} from "../classes/paper-label";
import {ToastService} from "./toast.service";


@Injectable()
export class PaperService {

    constructor(
        private http: Http,
        private toastService: ToastService
    ) {}

    getPapersByLabel(label:PaperLabel){
        return this.http.get(`${CONFIG.apiUrl}/paper/label/${label.id}/papers/`).toPromise().then(response=>{
            return response.json();
        },err=>{
            this.toastService.toast('获取论文列表失败');
        });
    }

    getPaperDetail(paperId){
        return this.http.get(`${CONFIG.apiUrl}/paper/${paperId}/detail/`).toPromise();
    }

    getLabelList():Promise<any>{
        return this.http.get(`${CONFIG.apiUrl}/paper/label/list/`).toPromise().then(response=>{
            return response.json();
        });
    }

    searchPaper(searchText:string):Promise<any>{
        let keywords=searchText.split(/ +/);
        return this.http.post(`${CONFIG.apiUrl}/paper/search/basic`,JSON.stringify(keywords)).toPromise().then(response=>{
            console.log(response.json());
            return response.json();
        })
    }

}
