import {UserInfo} from "./user";
import {Label, LabeledItem} from './label'

export class Reply{
  id:number;
  user:UserInfo;
  time:string;
  mode:'text'|'picture';
  content:string;//plain text or picture url
  voteCount:number;
}
export class PostBrief {
  id:number;
  title:string;
  time:string;
  user:UserInfo;
  voteCount:number;
  viewCount:number;
  group?: PostGroup;
  labels: string[];
}

export class PostDetail extends PostBrief {
  content:string;
  replies:Reply[];//no pagination
}

export class PostGroup {
  id: number;
  name: string;
}
