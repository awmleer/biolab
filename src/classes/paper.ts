export class PaperBrief {
    id:number;
    title:string;
    teachers:[{
        id: number;
        name: string;
    }];
    subject:string;
    keyword:string;
    publishYear:number;
    downloadCount:number;
}


export class PaperDetailed {
    id:number;
    title:string;
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

