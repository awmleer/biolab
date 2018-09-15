export class NoticeBrief {
  id: string;
  time: string;
  title: string;
  starred: boolean;
}

export class NoticeDetail extends NoticeBrief {
  content: string; // html
}
