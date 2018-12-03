import {html,uri} from "./types";
import {Label} from './label';

export class ReagentEntry {
  id: number;
  chineseName: string;
  englishName: string;
  alias: string;
  labels: Label[];
}

export class ReagentBrief extends ReagentEntry {
  molecularFormula: string;
  molecularFormulaParsed: html;
  molecularWeight: string;
  dangerous: null | string;
  pictures: ReagentPicture[];
}

export class ReagentDetail extends ReagentBrief {
  description: string;
}

export interface ReagentPicture {
  id: number;
  description: string;
  url: uri;
}

export interface GetReagentsResult {
  totalPageCount:number;
  totalReagentCount:number;
  reagents:ReagentBrief[];
}
