export class PaperBrief {
    id:number;
    title:string;
    author:string;
    teachers:[{
        id: number;
        name: string;
    }];
    abstract:string;
    keyword:string;
    publishYear:number;
    downloadCount:number;
}


export class PaperDetailed {
    id:number;
    title:string;
    author:string;
    labels:[{
        id:number;
        name:string;
    }];
    teachers:[{
        id: number;
        name: string;
    }];
    subject:string;
    keyword:string;
    abstract:string;
    publishYear:number;
    downloadCount:number;
}


export interface GetPapersResult {
    totalPageCount:number,
    papers:PaperBrief[]
}
