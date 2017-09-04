export class PaperBrief {
    id:number;
    title:string;
    author:string;
    major:string;
    teachers:[{
        id: number;
        name: string;
    }];
    abstract:string;
    keyword:string;
    publishYear:number;
    downloadCount:number;
}


export class PaperDetail {
    id:number;
    title:string;
    subject:string;
    keyword:string;
    abstract:string;
    author:string;
    major:string;
    teachers:{
        id:number;
        name:string;
    }[];
    labels:{
        id:number;
        name:string;
    }[];
    publishYear:number;
    downloadCount:number;
}


export interface GetPapersResult {
    totalPageCount:number;
    totalPaperCount:number;
    papers:PaperBrief[];
}
