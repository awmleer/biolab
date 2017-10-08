export class PostBrief {
  id:number;
  title:string;
  author:string;
  time:string;
}

export class PostDetail extends PostBrief {
  content:string;
  replies:Reply[];
}

export class Reply {
  id:number;
  author:string;
  content:string;
  time:string;
}
