import {Injectable} from '@angular/core';
import {SocialSharing} from "@ionic-native/social-sharing";
import {CONFIG} from "../app/config";

@Injectable()
export class ShareService {

    constructor(
        private socialSharing: SocialSharing,
    ) {}

    sharePaper(paperId,title):Promise<any>{
        return this.socialSharing.shareWithOptions({
            message: `${title} 点击链接阅读：${CONFIG.apiUrl}/paper/${paperId}/preview/`,
            subject: `${title}`,
            url: `${CONFIG.apiUrl}/paper/${paperId}/preview/`
        });
    }
}
