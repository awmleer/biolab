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


export class PaperDetail extends PaperBrief {
    subject:string;
    labels:{
        id:number;
        name:string;
    }[];
}


export interface GetPapersResult {
    totalPageCount:number;
    totalPaperCount:number;
    papers:PaperBrief[];
}
