import {html,uri} from "./types";
import {ReagentLabel} from "./reagent-label";

export class ReagentEntry {
  id: number;
  chineseName: string;
  englishName: string;
  alias: string;
  labels: ReagentLabel[];
}

export class ReagentBrief extends ReagentEntry {
  molecularFormula: string;
  molecularFormulaParsed: html;
  molecularWeight: string;
  dangerous: null | string;
}

export class ReagentDetail extends ReagentBrief {
  pictures: ReagentPicture[];
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
