import {Injectable} from '@angular/core';
import {SocialSharing} from "@ionic-native/social-sharing";
import {CONST} from "../app/const";

@Injectable()
export class ShareService {

    constructor(
        private socialSharing: SocialSharing,
    ) {}

    sharePaper(paperId,title):Promise<any>{
        return this.socialSharing.shareWithOptions({
            message: `${title} 点击链接阅读：${CONST.apiUrl}/paper/${paperId}/preview/`,
            subject: `${title}`,
            url: `${CONST.apiUrl}/paper/${paperId}/preview/`
        });
    }
}
