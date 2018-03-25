import {UserItem} from "./user";

export class Reply{
  id:number;
  user:UserItem;
  time:string;
  mode:'text'|'picture';
  content:string;//plain text or picture url
  voteCount:number;
}
export class PostBrief{
  id:number;
  title:string;
  time:string;
  user:UserItem;
  voteCount:number;
  viewCount:number;
  voted:boolean;
}

export class PostDetail extends PostBrief{
  content:string;
  replies:Reply[];//no pagination
}
