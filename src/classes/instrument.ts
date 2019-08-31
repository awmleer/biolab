import {uri} from "./types";
import {InstrumentLabel} from "./instrument-label";


export class InstrumentEntry { //TODO implements LabeledItem
  id: number;
  chineseName: string;
  englishName: string;
  labels: InstrumentLabel[];
}

export class InstrumentBrief extends InstrumentEntry {
  coverImg: string;//url
  modelNumber: string;
}

export class InstrumentDetail extends InstrumentBrief {
  content: {
    outer: string;
    inner: string;
    instructions: string;
    attentions: string;
  };//HTML
}

export interface InstrumentPicture {
  id: number;
  description: string;
  url: uri;
}

export interface GetInstrumentsResult {
  totalPageCount:number;
  totalItemCount:number;
  items:InstrumentBrief[];
}
