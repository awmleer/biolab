import {html,uri} from "./types";
import {InstrumentLabel} from "./instrument-label";

export class InstrumentEntry {
  id: number;
  chineseName: string;
  englishName: string;
  alias: string;
  labels: InstrumentLabel[];
}

export class InstrumentBrief extends InstrumentEntry {
  molecularFormula: string;
  molecularFormulaParsed: html;
  molecularWeight: string;
  dangerous: null | string;
  pictures: InstrumentPicture[];
}

export class InstrumentDetail extends InstrumentBrief {
  description: string;
}

export interface InstrumentPicture {
  id: number;
  description: string;
  url: uri;
}

export interface GetInstrumentsResult {
  totalPageCount:number;
  totalInstrumentCount:number;
  instruments:InstrumentBrief[];
}
