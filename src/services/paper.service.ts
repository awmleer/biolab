import {Injectable} from "@angular/core";

import 'rxjs/add/operator/toPromise'
import {Http} from "@angular/http";
import {CONFIG} from "../app/config";
import {PaperLabel} from "../classes/paper-label";


@Injectable()
export class PaperService {

    constructor(
        private http: Http
    ) {}

    getPapersByLabel(label:PaperLabel){
        return this.http.get(`${CONFIG.apiUrl}/paper/label/${label.id}/papers/`).toPromise().then(response=>{
            return response.json();
        });
    }

}
